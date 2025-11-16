// بيانات السلع العالمية مع تحليل متقدم للأسواق السعودية والخليجية
export const commodityData = {
  energy: [
    {
      name: 'النفط الخام برنت',
      symbol: 'BRENT',
      currentPrice: 82.45,
      change24h: 1.23,
      changePercent: 1.51,
      volume24h: '890M',
      unit: 'دولار/برميل',
      marketCap: '4.2T',
      category: 'طاقة',
      saudiImpact: {
        productionShare: 12.5, // نسبة الإنتاج العالمي
        revenueImpact: 'عالي جداً', // تأثير على الإيرادات
        economicWeight: 85, // الوزن في الاقتصاد السعودي
        priceCorrelation: 0.95, // الارتباط مع اقتصاد المملكة
        employmentImpact: 'مباشر',
        budgetDependency: 'كبير'
      },
      technicalAnalysis: {
        trend: 'صاعد',
        support: 78.50,
        resistance: 87.20,
        rsi: 64.2,
        macd: 'إشارة شراء',
        bollinger: 'قرب المقاومة العلوية',
        movingAverage50: 79.80,
        movingAverage200: 76.45
      },
      fundamentalFactors: {
        globalDemand: 'متزايد',
        supply: 'محدود',
        geopoliticalRisk: 'متوسط',
        inventoryLevels: 'منخفض',
        seasonality: 'إيجابي',
        economicGrowth: 'داعم'
      },
      predictions: {
        nextWeek: { price: 85.20, confidence: 78 },
        nextMonth: { price: 88.50, confidence: 65 },
        nextQuarter: { price: 92.00, confidence: 45 }
      },
      visionImpact: {
        diversificationEffect: 'متوسط',
        renewableTransition: 'طويل الأمد',
        petrochemicalGrowth: 'إيجابي'
      }
    },
    {
      name: 'الغاز الطبيعي',
      symbol: 'NATGAS',
      currentPrice: 2.89,
      change24h: 0.08,
      changePercent: 2.84,
      volume24h: '145M',
      unit: 'دولار/مليون وحدة حرارية',
      marketCap: '1.8T',
      category: 'طاقة',
      saudiImpact: {
        productionShare: 8.2,
        revenueImpact: 'متوسط',
        economicWeight: 25,
        priceCorrelation: 0.72,
        employmentImpact: 'غير مباشر',
        budgetDependency: 'متوسط'
      },
      technicalAnalysis: {
        trend: 'عرضي',
        support: 2.65,
        resistance: 3.15,
        rsi: 52.8,
        macd: 'محايد',
        bollinger: 'وسط النطاق'
      }
    }
  ],
  
  metals: [
    {
      name: 'الذهب',
      symbol: 'GOLD',
      currentPrice: 2654.80,
      change24h: 12.45,
      changePercent: 0.47,
      volume24h: '2.8B',
      unit: 'دولار/أونصة',
      marketCap: '15.2T',
      category: 'معادن ثمينة',
      saudiImpact: {
        reserves: 323.1, // الاحتياطيات بالطن
        productionShare: 0.8,
        investmentDemand: 'عالي',
        culturalSignificance: 'عالي جداً',
        hedgingValue: 'ممتاز',
        portfolioWeight: 'مُوصى 5-10%'
      },
      technicalAnalysis: {
        trend: 'صاعد قوي',
        support: 2620.00,
        resistance: 2700.00,
        rsi: 68.5,
        macd: 'صاعد',
        bollinger: 'اختراق علوي'
      },
      fundamentalFactors: {
        inflation: 'داعم قوي',
        dollarStrength: 'معاكس',
        centralBankBuying: 'إيجابي',
        jewelryDemand: 'قوي',
        investmentDemand: 'متزايد'
      },
      islamicCompliance: {
        shariaCompliant: true,
        physicalOwnership: 'مُفضل',
        paperGold: 'محل جدل',
        zakahApplicable: true
      }
    },
    {
      name: 'الفضة',
      symbol: 'SILVER',
      currentPrice: 31.85,
      change24h: 0.67,
      changePercent: 2.14,
      volume24h: '1.1B',
      unit: 'دولار/أونصة',
      marketCap: '1.4T',
      category: 'معادن ثمينة',
      saudiImpact: {
        industrialDemand: 'متزايد',
        solarIndustry: 'نمو قوي',
        investmentAlternative: 'جيد',
        volatilityRisk: 'أعلى من الذهب'
      },
      technicalAnalysis: {
        trend: 'صاعد',
        support: 29.50,
        resistance: 34.20,
        rsi: 72.1,
        macd: 'إشارة قوية'
      }
    },
    {
      name: 'النحاس',
      symbol: 'COPPER',
      currentPrice: 9.12,
      change24h: -0.08,
      changePercent: -0.87,
      volume24h: '890M',
      unit: 'دولار/رطل',
      marketCap: '2.1T',
      category: 'معادن صناعية',
      economicIndicator: 'مؤشر النمو الاقتصادي العالمي',
      saudiProjects: {
        neom: 'استهلاك كبير',
        infrastructure: 'طلب متزايد',
        electricVehicles: 'فرصة نمو'
      }
    }
  ],
  
  agriculture: [
    {
      name: 'القمح',
      symbol: 'WHEAT',
      currentPrice: 5.67,
      change24h: 0.12,
      changePercent: 2.16,
      volume24h: '450M',
      unit: 'دولار/بوشل',
      category: 'زراعة',
      foodSecurity: {
        saudiImports: 3.2, // مليون طن سنوياً
        strategicReserves: 'كافية لـ 6 أشهر',
        localProduction: 'محدود',
        priceVolatility: 'عالي',
        alternativeSources: ['أوكرانيا', 'روسيا', 'الولايات المتحدة']
      },
      climateFactor: {
        drought: 'مخاطر عالية',
        yield: 'متغير',
        seasonality: 'قوي'
      }
    }
  ],
  
  saudiSpecific: [
    {
      name: 'البتروكيماويات',
      symbol: 'SABIC',
      description: 'مؤشر صناعة البتروكيماويات السعودية',
      currentIndex: 2845.60,
      change24h: 28.90,
      changePercent: 1.03,
      economicRole: {
        gdpContribution: 8.5,
        exportShare: 15.2,
        employmentDirect: 85000,
        employmentIndirect: 340000,
        vision2030Impact: 'محوري'
      },
      globalPosition: {
        marketShare: 12.8,
        competitiveAdvantage: 'تكلفة المواد الخام',
        exportDestinations: ['آسيا', 'أوروبا', 'الشرق الأوسط']
      }
    },
    {
      name: 'مؤشر الطاقة المتجددة',
      symbol: 'RENEWABLE_SA',
      currentIndex: 156.80,
      change24h: 4.20,
      changePercent: 2.75,
      vision2030: {
        target: '50% من الطاقة المتجددة',
        currentProgress: 'على المسار الصحيح',
        investmentRequired: '200 مليار ريال'
      }
    }
  ]
};

// تحليل التأثيرات الجيوسياسية على الأسعار
export const geopoliticalImpacts = {
  middleEast: {
    oilPriceRisk: 'عالي',
    supplySecurity: 'مهم جداً',
    regionalStability: 'متغير'
  },
  
  globalTrade: {
    chinaFactor: 'كبير',
    usPolicies: 'مؤثر',
    europeRegulations: 'متوسط'
  },
  
  climateChange: {
    transitionImpact: 'طويل الأمد',
    carbonPricing: 'متزايد الأهمية',
    renewableGrowth: 'سريع'
  }
};

// استراتيجيات الاستثمار في السلع للمستثمرين الخليجيين
export const commodityStrategies = {
  conservative: {
    name: 'المحافظ',
    allocation: {
      gold: 40,
      silver: 15,
      oil: 20,
      agriculture: 15,
      copper: 10
    },
    riskLevel: 'منخفض',
    expectedReturn: '6-9%',
    timeHorizon: '5+ سنوات',
    shariaCompliance: 95
  },
  
  balanced: {
    name: 'المتوازن',
    allocation: {
      gold: 25,
      silver: 10,
      oil: 35,
      naturalGas: 15,
      copper: 10,
      agriculture: 5
    },
    riskLevel: 'متوسط',
    expectedReturn: '8-12%',
    timeHorizon: '3-7 سنوات',
    shariaCompliance: 90
  },
  
  aggressive: {
    name: 'القوي',
    allocation: {
      oil: 40,
      naturalGas: 20,
      copper: 15,
      silver: 15,
      agriculture: 10
    },
    riskLevel: 'عالي',
    expectedReturn: '12-18%',
    timeHorizon: '1-5 سنوات',
    shariaCompliance: 85
  }
};

// متقدم: تحليل الارتباط بين السلع
export const correlationAnalysis = {
  oilGold: -0.35, // علاقة عكسية ضعيفة
  oilDollar: 0.78, // علاقة طردية قوية
  goldInflation: 0.82, // علاقة طردية قوية
  copperEconomicGrowth: 0.91, // علاقة طردية قوية جداً
  agricultureWeather: 0.65 // علاقة طردية متوسطة
};

// تنبؤات متقدمة بالذكاء الاصطناعي
export const aiPredictions = {
  nextQuarter: {
    oil: { price: 89.50, probability: 72, factors: ['الطلب الصيني', 'إنتاج أوبك+'] },
    gold: { price: 2720.00, probability: 68, factors: ['التضخم', 'أسعار الفائدة'] },
    copper: { price: 9.85, probability: 61, factors: ['النمو الاقتصادي', 'البنية التحتية'] }
  },
  
  scenarios: {
    bullish: {
      probability: 35,
      triggers: ['نمو اقتصادي قوي', 'توترات جيوسياسية', 'تضخم مرتفع'],
      impact: 'ارتفاع عام في أسعار السلع'
    },
    bearish: {
      probability: 25,
      triggers: ['ركود اقتصادي', 'زيادة المعروض', 'قوة الدولار'],
      impact: 'انخفاض في معظم السلع'
    },
    neutral: {
      probability: 40,
      description: 'استقرار نسبي مع تقلبات محدودة'
    }
  }
};