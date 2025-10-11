-- CreateEnum
CREATE TYPE "ProductStatus" AS ENUM ('active', 'discontinued');

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
    "clearance_end_date" DATE NOT NULL,
    "status" "ProductStatus" NOT NULL DEFAULT 'active',
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
    "updated_at" TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "settings_pkey" PRIMARY KEY ("key")
);

-- CreateIndex
CREATE UNIQUE INDEX "products_sku_key" ON "products"("sku");

-- CreateIndex
CREATE INDEX "idx_products_clearance_end_date" ON "products"("clearance_end_date");

-- CreateIndex
CREATE INDEX "idx_sales_daily_date" ON "sales_daily"("sale_date");

-- CreateIndex
CREATE UNIQUE INDEX "competitors_name_key" ON "competitors"("name");

-- CreateIndex
CREATE INDEX "idx_competitor_prices_date" ON "competitor_prices"("price_date");

-- AddForeignKey
ALTER TABLE "inventory" ADD CONSTRAINT "inventory_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "price_history" ADD CONSTRAINT "price_history_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "sales_daily" ADD CONSTRAINT "sales_daily_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "elasticity_estimates" ADD CONSTRAINT "elasticity_estimates_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "competitor_prices" ADD CONSTRAINT "competitor_prices_competitor_id_fkey" FOREIGN KEY ("competitor_id") REFERENCES "competitors"("competitor_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "competitor_prices" ADD CONSTRAINT "competitor_prices_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "markdown_evaluations" ADD CONSTRAINT "markdown_evaluations_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "markdown_actions_log" ADD CONSTRAINT "markdown_actions_log_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "products"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "action_outcomes" ADD CONSTRAINT "action_outcomes_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "markdown_actions_log"("action_id") ON DELETE CASCADE ON UPDATE CASCADE;
