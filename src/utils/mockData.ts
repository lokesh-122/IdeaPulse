import { AnalysisResult } from '../types';

export const generateMockAnalysis = (ideaData: any): AnalysisResult => {
  // This is just mock data - in a real application, this would be generated based on the input
  return {
    feasibility: {
      overall: 68,
      technical: 75,
      market: 62,
      financial: 70,
      team: 65
    },
    swot: {
      strengths: [
        {
          title: "Unique Value Proposition",
          description: "Your unique selling point stands out in the market and addresses a clear need."
        },
        {
          title: "Target Market Clarity",
          description: "You have a well-defined target audience which helps in focused marketing."
        },
        {
          title: "Revenue Model",
          description: "Your chosen revenue model aligns well with your product and market expectations."
        }
      ],
      weaknesses: [
        {
          title: "Competitive Landscape",
          description: "Several established competitors exist in this space already."
        },
        {
          title: "Resource Requirements",
          description: "Implementation may require significant technical resources."
        },
        {
          title: "Market Education",
          description: "May need to educate the market about your solution's benefits."
        }
      ],
      opportunities: [
        {
          title: "Market Growth",
          description: "The market for this type of solution is growing at a healthy rate."
        },
        {
          title: "Partnership Potential",
          description: "Opportunities exist for strategic partnerships to accelerate growth."
        },
        {
          title: "International Expansion",
          description: "The solution has potential for international markets after establishing locally."
        }
      ],
      threats: [
        {
          title: "Regulatory Changes",
          description: "Potential changes in regulations could impact your business model."
        },
        {
          title: "Technology Shifts",
          description: "Rapid technological changes might require frequent pivoting."
        },
        {
          title: "Economic Fluctuations",
          description: "Market demand may be sensitive to economic downturns."
        }
      ]
    },
    marketSizing: {
      totalAddressableMarket: "$15.4 Billion",
      servicedAvailableMarket: "$3.8 Billion",
      servicedObtainableMarket: "$120 Million",
      growthRate: "14.2%"
    },
    pitch: `
Introducing ${ideaData.title || "Our Startup"} - a revolutionary solution in the ${ideaData.industry || "industry"} space designed to transform how users experience ${ideaData.description ? ideaData.description.split(' ').slice(0, 5).join(' ') + '...' : "this market"}.

Our solution addresses a critical gap in the market: ${ideaData.uniqueSellingPoint || "a unique value proposition that stands out from competitors"}. While existing solutions like ${ideaData.competitors || "competitor products"} focus on [x], we're taking a fundamentally different approach by prioritizing [y].

Our target market consists of ${ideaData.targetAudience || "specific customer segments"} - a growing segment with a total addressable market of $15.4B. We project capturing $120M of this market within 5 years, representing a compound annual growth rate of 14.2%.

We're utilizing a ${ideaData.revenueModel || "business model"} approach to monetization, which allows us to achieve strong unit economics with a projected 65% gross margin and 18-month payback period on customer acquisition costs.

Our team brings together expertise in [industry knowledge], [technical skills], and [business development], positioning us perfectly to execute on this vision.

We're seeking a $1.5M seed investment to achieve key milestones over the next 18 months: completing product development, securing initial customers, and establishing product-market fit.

Join us in revolutionizing the ${ideaData.industry || "industry"} landscape and creating substantial value for both customers and investors.`
  };
};