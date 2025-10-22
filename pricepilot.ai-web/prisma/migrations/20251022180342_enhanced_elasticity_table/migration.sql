-- AlterTable
ALTER TABLE "elasticity_estimates" ADD COLUMN     "feature_coefficients" JSONB,
ADD COLUMN     "feature_count" INTEGER,
ADD COLUMN     "features_used" TEXT[],
ADD COLUMN     "model_r_squared" DECIMAL(6,4);
