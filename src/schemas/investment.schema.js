import mongoose from 'mongoose';

const investmentSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: true,
  },
  roi: {
    type: String,
    required: true,
  },
  payback_period_years: {
    type: Number,
    required: true,
  },
  total_investment: {
    type: Number,
    required: true,
  },
  five_year_profit: {
    type: Number,
    required: true,
  },
  annual_financial_summary: {
    revenue: {
      type: Number,
      required: true,
    },
    costs: {
      type: Number,
      required: true,
    },
    profit: {
      type: Number,
      required: true,
    },
  },
  investment_breakdown: {
    equipment_costs: {
      type: Number,
      required: true,
    },
    installation_costs: {
      type: Number,
      required: true,
    },
  },
  profit_projections: [
    {
      year: {
        type: Number,
        required: true,
      },
      revenue: {
        type: Number,
        required: true,
      },
      costs: {
        type: Number,
        required: true,
      },
      profit: {
        type: Number,
        required: true,
      },
    },
  ],
}, { timestamps: true });

export default mongoose.model('Investment', investmentSchema);
