-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('active', 'discontinued');

-- CreateEnum
CREATE TYPE "Seasonality" AS ENUM ('spring', 'summer', 'fall', 'winter', 'year_round');

-- CreateEnum
CREATE TYPE "CampaignType" AS ENUM ('flash_sale', 'clearance', 'seasonal', 'cross_promotion', 'end_of_life');

-- CreateEnum
CREATE TYPE "CampaignStatus" AS ENUM ('draft', 'active', 'paused', 'completed', 'cancelled');

-- CreateEnum
CREATE TYPE "AuditAction" AS ENUM ('INSERT', 'UPDATE', 'DELETE', 'TRUNCATE');

-- CreateEnum
CREATE TYPE "ChangeSource" AS ENUM ('system', 'ai_agent', 'manual', 'api', 'migration', 'scheduled_job');

-- CreateEnum
CREATE TYPE "ApprovalStatus" AS ENUM ('pending', 'approved', 'auto_approved', 'rejected');

-- CreateTable
CREATE TABLE "products" (
    "product_id" BIGSERIAL NOT NULL,
    "sku" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT,
    "brand" TEXT,
    "unit_cost" DECIMAL(12,4) NOT NULL,
    "base_price" DECIMAL(12,4) NOT NULL,
    "current_price" DECIMAL(12,4) NOT NULL,
    "holding_cost_per_unit_per_day" DECIMAL(12,4) NOT NULL DEFAULT 0,
    "clearance_end_date" DATE,
    "status" "ProductStatus" NOT NULL DEFAULT 'active',
    "seasonality" "Seasonality",
    "tags" TEXT[],
    "min_stock_level" INTEGER,
    "max_stock_level" INTEGER,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "products_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "inventory" (
    "product_id" BIGINT NOT NULL,
    "location" TEXT NOT NULL DEFAULT 'main',
    "stock_on_hand" INTEGER NOT NULL,
    "reserved" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "inventory_pkey" PRIMARY KEY ("product_id","location")
);

-- CreateTable
CREATE TABLE "price_history" (
    "price_id" BIGSERIAL NOT NULL,
    "product_id" BIGINT NOT NULL,
    "price" DECIMAL(12,4) NOT NULL,
    "markdown_pct" DECIMAL(5,2) NOT NULL DEFAULT 0,
    "started_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ended_at" TIMESTAMPTZ,

    CONSTRAINT "price_history_pkey" PRIMARY KEY ("price_id")
);

-- CreateTable
CREATE TABLE "sales_daily" (
    "product_id" BIGINT NOT NULL,
    "sale_date" DATE NOT NULL,
    "units_sold" INTEGER NOT NULL,
    "avg_unit_price" DECIMAL(12,4) NOT NULL,
    "promo_flag" BOOLEAN NOT NULL DEFAULT false,
    "channel_id" BIGINT,
    "return_rate" DECIMAL(5,2),
    "gross_margin" DECIMAL(12,4),

    CONSTRAINT "sales_daily_pkey" PRIMARY KEY ("product_id","sale_date")
);

-- CreateTable
CREATE TABLE "elasticity_estimates" (
    "product_id" BIGINT NOT NULL,
    "elasticity" DECIMAL(8,4) NOT NULL,
    "method" TEXT NOT NULL,
    "sample_size" INTEGER,
    "confidence" DECIMAL(5,2),
    "last_updated" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "elasticity_estimates_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "channels" (
    "channel_id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "average_conversion_rate" DECIMAL(5,2),
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "channels_pkey" PRIMARY KEY ("channel_id")
);

-- CreateTable
CREATE TABLE "campaigns" (
    "campaign_id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "campaign_type" "CampaignType" NOT NULL,
    "start_date" TIMESTAMPTZ NOT NULL,
    "end_date" TIMESTAMPTZ NOT NULL,
    "target_audience" TEXT,
    "budget" DECIMAL(12,4),
    "status" "CampaignStatus" NOT NULL DEFAULT 'active',
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "campaigns_pkey" PRIMARY KEY ("campaign_id")
);

-- CreateTable
CREATE TABLE "campaign_channels" (
    "campaign_id" BIGINT NOT NULL,
    "channel_id" BIGINT NOT NULL,
    "channel_budget" DECIMAL(12,4),
    "priority" INTEGER NOT NULL DEFAULT 1,
    "custom_message" TEXT,
    "created_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "campaign_channels_pkey" PRIMARY KEY ("campaign_id","channel_id")
);

-- CreateTable
CREATE TABLE "competitors" (
    "competitor_id" BIGSERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,

    CONSTRAINT "competitors_pkey" PRIMARY KEY ("competitor_id")
);

-- CreateTable
CREATE TABLE "competitor_prices" (
    "competitor_id" BIGINT NOT NULL,
    "product_id" BIGINT NOT NULL,
    "price_date" DATE NOT NULL,
    "price" DECIMAL(12,4) NOT NULL,

    CONSTRAINT "competitor_prices_pkey" PRIMARY KEY ("competitor_id","product_id","price_date")
);

-- CreateTable
CREATE TABLE "markdown_evaluations" (
    "eval_id" BIGSERIAL NOT NULL,
    "product_id" BIGINT NOT NULL,
    "evaluated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "baseline_price" DECIMAL(12,4) NOT NULL,
    "baseline_expected_units" INTEGER NOT NULL,
    "baseline_expected_profit" DECIMAL(14,4) NOT NULL,
    "markdown_pct" DECIMAL(5,2) NOT NULL,
    "candidate_price" DECIMAL(12,4) NOT NULL,
    "expected_units" INTEGER NOT NULL,
    "expected_profit" DECIMAL(14,4) NOT NULL,
    "expected_days_to_sell" INTEGER,
    "expected_unsold_units" INTEGER,
    "is_optimal" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "markdown_evaluations_pkey" PRIMARY KEY ("eval_id")
);

-- CreateTable
CREATE TABLE "markdown_actions_log" (
    "action_id" BIGSERIAL NOT NULL,
    "product_id" BIGINT NOT NULL,
    "executed_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "before_price" DECIMAL(12,4) NOT NULL,
    "after_price" DECIMAL(12,4) NOT NULL,
    "stock_at_action" INTEGER NOT NULL,
    "expected_profit" DECIMAL(14,4) NOT NULL,
    "baseline_profit" DECIMAL(14,4) NOT NULL,
    "delta_expected_profit" DECIMAL(14,4) NOT NULL,
    "notes" TEXT,
    "markdown_pct" DECIMAL(5,2) NOT NULL,
    "confidence_score" DECIMAL(3,2),
    "trigger_reason" TEXT,
    "approval_status" "ApprovalStatus" NOT NULL DEFAULT 'pending',
    "campaign_id" BIGINT,

    CONSTRAINT "markdown_actions_log_pkey" PRIMARY KEY ("action_id")
);

-- CreateTable
CREATE TABLE "action_outcomes" (
    "action_id" BIGINT NOT NULL,
    "window_start" TIMESTAMPTZ NOT NULL,
    "window_end" TIMESTAMPTZ NOT NULL,
    "actual_units_sold" INTEGER NOT NULL,
    "actual_profit" DECIMAL(14,4) NOT NULL,

    CONSTRAINT "action_outcomes_pkey" PRIMARY KEY ("action_id","window_start","window_end")
);

-- CreateTable
CREATE TABLE "settings" (
    "key" TEXT NOT NULL,
    "value" JSONB NOT NULL,
    "setting_type" TEXT NOT NULL DEFAULT 'string',
    "description" TEXT,
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("key")
);

-- CreateTable
CREATE TABLE "audit_log" (
    "audit_id" BIGSERIAL NOT NULL,
    "table_name" TEXT NOT NULL,
    "record_id" BIGINT NOT NULL,
    "action" "AuditAction" NOT NULL,
    "old_values" JSONB,
    "new_values" JSONB,
    "change_source" "ChangeSource" NOT NULL DEFAULT 'system',
    "changed_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "audit_log_pkey" PRIMARY KEY ("audit_id")
);

-- CreateTable
CREATE TABLE "performance_metrics" (
    "id" BIGSERIAL NOT NULL,
    "metric_name" TEXT NOT NULL,
    "metric_value" DECIMAL(15,4) NOT NULL,
    "dimensions" JSONB,
    "measured_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "performance_metrics_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_sku_key" ON "products"("sku");

-- CreateIndex
CREATE INDEX "idx_products_clearance_end_date" ON "products"("clearance_end_date");

-- CreateIndex
CREATE INDEX "idx_products_category" ON "products"("category");

-- CreateIndex
CREATE INDEX "idx_products_seasonality" ON "products"("seasonality");

-- CreateIndex
CREATE INDEX "idx_products_status" ON "products"("status");

-- CreateIndex
CREATE INDEX "idx_products_tags" ON "products" USING GIN ("tags");

-- CreateIndex
CREATE INDEX "idx_inventory_stock" ON "inventory"("stock_on_hand");

-- CreateIndex
CREATE INDEX "idx_price_history_product_date" ON "price_history"("product_id", "started_at");

-- CreateIndex
CREATE INDEX "idx_sales_daily_date" ON "sales_daily"("sale_date");

-- CreateIndex
CREATE INDEX "idx_sales_daily_channel" ON "sales_daily"("channel_id");

-- CreateIndex
CREATE UNIQUE INDEX "channels_name_key" ON "channels"("name");

-- CreateIndex
CREATE INDEX "idx_campaign_dates" ON "campaigns"("start_date", "end_date");

-- CreateIndex
CREATE INDEX "idx_campaign_type_status" ON "campaigns"("campaign_type", "status");

-- CreateIndex
CREATE INDEX "idx_campaign_channels_campaign" ON "campaign_channels"("campaign_id");

-- CreateIndex
CREATE INDEX "idx_campaign_channels_channel" ON "campaign_channels"("channel_id");

-- CreateIndex
CREATE INDEX "idx_campaign_channels_priority" ON "campaign_channels"("campaign_id", "priority");

-- CreateIndex
CREATE UNIQUE INDEX "competitors_name_key" ON "competitors"("name");

-- CreateIndex
CREATE INDEX "idx_competitor_prices_date" ON "competitor_prices"("price_date");

-- CreateIndex
CREATE INDEX "idx_competitor_prices_product_date" ON "competitor_prices"("product_id", "price_date");

-- CreateIndex
CREATE INDEX "idx_markdown_eval_product_date" ON "markdown_evaluations"("product_id", "evaluated_at");

-- CreateIndex
CREATE INDEX "idx_markdown_actions_product_date" ON "markdown_actions_log"("product_id", "executed_at");

-- CreateIndex
CREATE INDEX "idx_markdown_actions_campaign" ON "markdown_actions_log"("campaign_id");

-- CreateIndex
CREATE INDEX "idx_markdown_actions_approval" ON "markdown_actions_log"("approval_status");

-- CreateIndex
CREATE INDEX "idx_audit_table_record" ON "audit_log"("table_name", "record_id");

-- CreateIndex
CREATE INDEX "idx_audit_date" ON "audit_log"("changed_at");

-- CreateIndex
CREATE INDEX "idx_audit_source_date" ON "audit_log"("change_source", "changed_at");

-- CreateIndex
CREATE INDEX "idx_metrics_name_date" ON "performance_metrics"("metric_name", "measured_at");

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "price_history" ADD CONSTRAINT "price_history_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales_daily" ADD CONSTRAINT "sales_daily_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales_daily" ADD CONSTRAINT "sales_daily_channel_id_fkey" FOREIGN KEY ("channel_id") REFERENCES "channels"("channel_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elasticity_estimates" ADD CONSTRAINT "elasticity_estimates_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_channels" ADD CONSTRAINT "campaign_channels_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("campaign_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "campaign_channels" ADD CONSTRAINT "campaign_channels_channel_id_fkey" FOREIGN KEY ("channel_id") REFERENCES "channels"("channel_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "competitor_prices" ADD CONSTRAINT "competitor_prices_competitor_id_fkey" FOREIGN KEY ("competitor_id") REFERENCES "competitors"("competitor_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "competitor_prices" ADD CONSTRAINT "competitor_prices_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "markdown_evaluations" ADD CONSTRAINT "markdown_evaluations_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "markdown_actions_log" ADD CONSTRAINT "markdown_actions_log_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "markdown_actions_log" ADD CONSTRAINT "markdown_actions_log_campaign_id_fkey" FOREIGN KEY ("campaign_id") REFERENCES "campaigns"("campaign_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_outcomes" ADD CONSTRAINT "action_outcomes_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "markdown_actions_log"("action_id") ON DELETE CASCADE ON UPDATE CASCADE;
