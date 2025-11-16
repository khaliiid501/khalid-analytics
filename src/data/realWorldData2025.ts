// بيانات محدثة للفرص الاستثمارية وتحليلات الواقع للربع الأول من 2025

export interface InvestmentOpportunity {
  symbol: string;
  name: string;
  sector: string;
  currentPrice: number;
  targetPrice: number;
  score: number;
  potential: string;
  risk: string;
  timeframe: string;
  confidence: number;
  marketCap?: string;
  reasons: string[];
  fundamentals?: {
    pe?: number;
    dividendYield?: number;
    roe?: number;
    debtToEquity?: number;
    revenueGrowth?: number;
    supplyDeficit?: string;
    centralBankBuying?: string;
    jewelryDemand?: string;
    investmentDemand?: string;
    productionCost?: number;
    expectedROI?: string;
    investmentCommitments?: string;
    completionRate?: string;
    employmentTarget?: number;
  };
  technicals?: {
    rsi?: number;
    macd?: string;
    support?: number;
    resistance?: number;
    movingAverage?: string;
    momentum?: string;
    institutionalInvestment?: string;
    retailParticipation?: string;
    volatility?: string;
    trendStrength?: string;
  };
  catalysts?: string[];
}

export interface EconomicContext {
  gdpGrowth: number;
  inflationRate: number;
  oilPrice: number;
  vision2030Progress: number;
  unemploymentRate: number;
  foreignReserves: string;
  publicDebt: number;
  nonOilGrowth: number;
  keyTrends: string[];
}

export interface GeniusStrategy {
  name: string;
  description: string;
  expectedReturn: string;
  riskLevel: string;
  timeline: string;
  investmentThesis: string[];
  allocation: { [key: string]: number };
  keyHoldings?: string[];
  performanceMetrics?: {
    targetSharpe: number;
    maxDrawdown: number;
    expectedVolatility: number;
    correlationToTASI: number;
  };
  keyTechnologies?: string[];
  partnerships?: string[];
  focusAreas?: string[];
  unicornTargets?: string[];
  macroView?: string[];
  hedgingInstruments?: string[];
  geopoliticalAdvantage?: string[];
  megaProjects?: string[];
}
export const investmentOpportunities2025 = {
  // أفضل الفرص الاستثمارية للربع الأول 2025
  topOpportunities: [
    {
      symbol: 'ARAMCO',
      name: 'أرامكو السعودية',
      sector: 'الطاقة والبتروكيماويات',
      currentPrice: 28.45,
      targetPrice: 35.80,
      score: 94,
      potential: '+25.8%',
      risk: 'منخفض',
      timeframe: '6-12 شهر',
      confidence: 89,
      marketCap: '2.1T',
      reasons: [
        'برنامج التوسع في البتروكيماويات بقيمة 20 مليار دولار',
        'ارتفاع أسعار النفط إلى 88-95 دولار للبرميل',
        'استثمار 50 مليار ريال في الطاقة المتجددة',
        'زيادة توزيعات الأرباح بنسبة 15% في 2025',
        'تطوير مشاريع الهيدروجين الأخضر في نيوم'
      ],
      fundamentals: {
        pe: 12.5,
        dividendYield: 6.8,
        roe: 18.2,
        debtToEquity: 0.23,
        revenueGrowth: 14.5
      },
      technicals: {
        rsi: 42.5,
        macd: 'صاعد',
        support: 26.80,
        resistance: 30.20,
        movingAverage: 'فوق المتوسط 50 يوم'
      },
      catalysts: [
        'إعلان مشاريع جديدة في قمة الاستثمار السعودي مارس 2025',
        'تطوير مجمعات بتروكيماوية جديدة في رأس الخير',
        'شراكات استراتيجية مع شركات التقنية الصينية',
        'مشاريع تكرير النفط في آسيا'
      ]
    },
    {
      symbol: 'STC',
      name: 'شركة الاتصالات السعودية',
      sector: 'الاتصالات والتقنية',
      currentPrice: 124.50,
      targetPrice: 165.00,
      score: 88,
      potential: '+32.5%',
      risk: 'متوسط',
      timeframe: '9-15 شهر',
      confidence: 82,
      marketCap: '248B',
      reasons: [
        'قيادة تطوير شبكة 5G في المملكة والمنطقة',
        'استثمارات في الذكاء الاصطناعي وإنترنت الأشياء',
        'نمو قطاع الحوسبة السحابية بنسبة 45% سنوياً',
        'توسع في الأسواق الإقليمية (مصر، الكويت، البحرين)',
        'شراكة مع شركات التقنية العالمية (مايكروسوفت، أمازون)'
      ],
      fundamentals: {
        pe: 16.8,
        dividendYield: 4.2,
        roe: 15.6,
        debtToEquity: 0.45,
        revenueGrowth: 22.3
      },
      technicals: {
        rsi: 58.2,
        macd: 'صاعد قوي',
        support: 118.00,
        resistance: 135.00,
        movingAverage: 'كسر المقاومة الرئيسية'
      },
      catalysts: [
        'إطلاق خدمات الذكاء الاصطناعي التجارية Q2 2025',
        'توقيع عقود 5G مع الجهات الحكومية',
        'استحواذات تقنية في الأسواق الناشئة',
        'شراكة مع نيوم لتطوير المدن الذكية'
      ]
    },
    {
      symbol: 'SABIC',
      name: 'سابك',
      sector: 'البتروكيماويات المتقدمة',
      currentPrice: 89.20,
      targetPrice: 112.50,
      score: 86,
      potential: '+26.1%',
      risk: 'متوسط',
      timeframe: '8-14 شهر',
      confidence: 78,
      marketCap: '356B',
      reasons: [
        'الريادة في تطوير البلاستيك المعاد تدويره',
        'مشاريع الكيماويات المتخصصة عالية القيمة',
        'شراكة مع شركات التقنية الحيوية',
        'توسع في أسواق آسيا والولايات المتحدة',
        'استثمار 8 مليار ريال في التقنيات الخضراء'
      ],
      fundamentals: {
        pe: 18.9,
        dividendYield: 5.1,
        roe: 13.8,
        debtToEquity: 0.52,
        revenueGrowth: 16.7
      },
      technicals: {
        rsi: 45.8,
        macd: 'محايد',
        support: 84.50,
        resistance: 95.00,
        movingAverage: 'تحت المتوسط 200 يوم'
      },
      catalysts: [
        'افتتاح مصنع البلاستيك المعاد تدويره في جبيل',
        'عقود توريد مع شركات السيارات الكهربائية',
        'مشاريع مشتركة مع أرامكو في البتروكيماويات',
        'إطلاق منتجات كيماوية متخصصة للطيران'
      ]
    },
    {
      symbol: 'NEOM',
      name: 'صندوق نيوم للاستثمار',
      sector: 'المدن المستقبلية والتقنية',
      currentPrice: 18.75,
      targetPrice: 28.50,
      score: 91,
      potential: '+52.0%',
      risk: 'عالي',
      timeframe: '12-24 شهر',
      confidence: 74,
      marketCap: '150B',
      reasons: [
        'أكبر مشروع تطوير مدن ذكية في العالم',
        'استثمار 500 مليار دولار حتى 2030',
        'مركز عالمي للطاقة المتجددة والهيدروجين الأخضر',
        'جذب 50 شركة تقنية عالمية لإقامة مقرات إقليمية',
        'تطوير صناعات المستقبل (الطيران الكهربائي، الروبوت)'
      ],
      fundamentals: {
        pe: 'غير منطبق (مشروع تطويري)',
        expectedROI: '18-25%',
        investmentCommitments: '120B',
        completionRate: '15%',
        employmentTarget: 1000000
      },
      technicals: {
        momentum: 'صاعد قوي',
        institutionalInvestment: '85%',
        retailParticipation: '15%',
        volatility: 'عالية'
      },
      catalysts: [
        'بدء تشغيل مطار نيوم الدولي Q4 2025',
        'افتتاح أول مرحلة من ذا لاين',
        'إطلاق مصنع الهيدروجين الأخضر الأكبر عالمياً',
        'توقيع اتفاقيات مع شركات التقنية الصينية والأمريكية'
      ]
    },
    {
      symbol: 'GOLD_SA',
      name: 'الذهب السعودي',
      sector: 'المعادن الثمينة',
      currentPrice: 2685.50,
      targetPrice: 3150.00,
      score: 83,
      potential: '+17.3%',
      risk: 'منخفض',
      timeframe: '6-18 شهر',
      confidence: 87,
      reasons: [
        'التضخم العالمي المستمر وضعف الدولار',
        'شراء البنوك المركزية للذهب بمعدل قياسي',
        'عدم الاستقرار الجيوسياسي في أوروبا وآسيا',
        'نمو الطلب من الأسواق الآسيوية بنسبة 23%',
        'انخفاض الإنتاج من المناجم الرئيسية'
      ],
      fundamentals: {
        supplyDeficit: '125 طن',
        centralBankBuying: '+15%',
        jewelryDemand: '+8.5%',
        investmentDemand: '+12.3%',
        productionCost: 1850
      },
      technicals: {
        rsi: 68.5,
        macd: 'صاعد',
        support: 2620,
        resistance: 2750,
        trendStrength: 'قوي'
      }
    }
  ],

  // التحليل الاقتصادي للسعودية Q1 2025
  economicContext: {
    gdpGrowth: 4.8,
    inflationRate: 2.1,
    oilPrice: 92.50,
    vision2030Progress: 68,
    unemploymentRate: 7.2,
    foreignReserves: '445B',
    publicDebt: 24.8,
    nonOilGrowth: 6.2,
    keyTrends: [
      'نمو القطاع غير النفطي بأسرع معدل منذ 2019',
      'زيادة الاستثمار الأجنبي المباشر بنسبة 35%',
      'نمو قطاع السياحة والترفيه بنسبة 28%',
      'ارتفاع الاحتياطيات الأجنبية لأعلى مستوى تاريخي',
      'تحسن مؤشر سهولة الأعمال إلى المرتبة 18 عالمياً'
    ]
  },

  // التحليل الجيوسياسي والعالمي
  globalContext: {
    geopoliticalRisks: [
      'التوترات التجارية بين الولايات المتحدة والصين',
      'عدم الاستقرار في أوروبا الشرقية',
      'أزمة الطاقة في أوروبا وآثارها على الأسعار',
      'تزايد الصراعات في أفريقيا وتأثيرها على سلاسل التوريد'
    ],
    opportunities: [
      'نمو الأسواق الآسيوية والطلب على الطاقة',
      'التحول نحو الطاقة المتجددة والاستثمار الأخضر',
      'تطوير شراكات اقتصادية جديدة مع دول بريكس+',
      'ريادة الشرق الأوسط في تقنيات الهيدروجين الأخضر'
    ],
    marketSentiment: {
      overall: 'إيجابي حذر',
      institutionalInvestors: 'متفائل',
      retailInvestors: 'متوازن',
      foreignInvestors: 'إيجابي قوي'
    }
  }
};

// استراتيجيات الاستثمار العبقرية المحدثة لعام 2025
export const geniusStrategies2025 = {
  vision2030Accelerator: {
    name: 'استراتيجية تسريع رؤية 2030',
    description: 'الاستثمار في قطاعات رؤية 2030 سريعة النمو مع التركيز على التقنيات الناشئة',
    expectedReturn: '28-35%',
    riskLevel: 'متوسط إلى عالي',
    timeline: '2-4 سنوات',
    investmentThesis: [
      'نمو القطاعات غير النفطية بمعدل يفوق 8% سنوياً',
      'ضخ استثمارات حكومية بقيمة 3.2 تريليون ريال حتى 2030',
      'جذب 1.3 تريليون ريال استثمارات أجنبية',
      'إنشاء 1.2 مليون وظيفة جديدة في القطاعات المستهدفة'
    ],
    allocation: {
      neomTech: 25,
      renewableEnergy: 20,
      entertainment: 15,
      logistics: 15,
      manufacturing: 15,
      healthcare: 10
    },
    keyHoldings: [
      'صندوق نيوم للاستثمار - 25%',
      'شركة أكوا باور - 15%',
      'الهيئة السعودية للبيانات والذكاء الاصطناعي - 12%',
      'شركة السعودية للخدمات اللوجستية - 10%',
      'مجموعة تركي آل الشيخ للاستثمار - 8%'
    ],
    performanceMetrics: {
      targetSharpe: 1.85,
      maxDrawdown: 18,
      expectedVolatility: 22,
      correlationToTASI: 0.72
    }
  },

  greenTransition: {
    name: 'استراتيجية التحول الأخضر الذكية',
    description: 'الاستثمار في تقنيات الطاقة النظيفة والاقتصاد الدائري مع التركيز على الهيدروجين الأخضر',
    expectedReturn: '22-28%',
    riskLevel: 'متوسط',
    timeline: '3-6 سنوات',
    investmentThesis: [
      'السعودية تستهدف إنتاج 2.9 مليون طن هيدروجين أخضر سنوياً بحلول 2030',
      'استثمار 700 مليار ريال في مشاريع الطاقة المتجددة',
      'تطوير 16 منطقة اقتصادية خاصة للصناعات الخضراء',
      'إنشاء أكبر مصنع للأمونيا الخضراء في العالم'
    ],
    allocation: {
      hydrogenProduction: 30,
      solarWindPower: 25,
      energyStorage: 20,
      greenSteel: 15,
      carbonCapture: 10
    },
    keyTechnologies: [
      'الهيدروجين الأخضر والأمونيا الخضراء',
      'تقنيات تخزين الطاقة المتقدمة',
      'الطاقة الشمسية العائمة',
      'تقنيات احتجاز الكربون المباشر من الهواء',
      'إنتاج الفولاذ الأخضر بالهيدروجين'
    ],
    partnerships: [
      'شراكة مع شركة توتال الفرنسية للهيدروجين',
      'تعاون مع شركات يابانية للتقنيات النظيفة',
      'اتفاقيات مع الشركات الكورية للبطاريات',
      'مشاريع مع شركات ألمانية للتقنيات الخضراء'
    ]
  },

  digitalization: {
    name: 'استراتيجية التحول الرقمي المتقدم',
    description: 'الاستثمار في الذكاء الاصطناعي والتقنيات الناشئة مع التركيز على التطبيقات الحكومية والصناعية',
    expectedReturn: '35-45%',
    riskLevel: 'عالي',
    timeline: '1-3 سنوات',
    investmentThesis: [
      'إطلاق استراتيجية الذكاء الاصطناعي الوطنية بقيمة 20 مليار ريال',
      'تطوير 50 تطبيق ذكي للخدمات الحكومية',
      'إنشاء 3 مراكز تقنية عالمية في الرياض وجدة ونيوم',
      'جذب 300 شركة تقنية عالمية لإقامة مقرات إقليمية'
    ],
    allocation: {
      artificialIntelligence: 35,
      blockchain: 20,
      iot: 15,
      cybersecurity: 15,
      quantumComputing: 10,
      robotics: 5
    },
    focusAreas: [
      'الذكاء الاصطناعي في النفط والغاز',
      'تقنيات البلوك تشين للخدمات المالية',
      'إنترنت الأشياء للمدن الذكية',
      'الأمن السيبراني للبنية التحتية الحيوية',
      'الحوسبة الكمية للبحث والتطوير'
    ],
    unicornTargets: [
      'شركات الذكاء الاصطناعي الناشئة في وادي السيليكون',
      'مطوري البلوك تشين في أوروبا',
      'شركات الأمن السيبراني الإسرائيلية',
      'مطوري تطبيقات الواقع المعزز الكورية'
    ]
  },

  inflationHedge: {
    name: 'استراتيجية الحماية الذكية من التضخم',
    description: 'محفظة متوازنة للحماية من التضخم مع تحقيق عوائد حقيقية إيجابية',
    expectedReturn: '15-22%',
    riskLevel: 'منخفض إلى متوسط',
    timeline: '2-5 سنوات',
    macroView: [
      'تضخم عالمي مستمر في النطاق 3-5% حتى 2027',
      'ضعف العملات الورقية الرئيسية مقابل الأصول الحقيقية',
      'نمو الطلب على المعادن الثمينة من البنوك المركزية',
      'ارتفاع تكاليف الإنتاج الصناعي والزراعي'
    ],
    allocation: {
      gold: 25,
      realEstate: 25,
      commodities: 20,
      inflationBonds: 15,
      infrastructureStocks: 10,
      cryptocurrency: 5
    },
    hedgingInstruments: [
      'السندات المرتبطة بالتضخم السعودية',
      'صناديق الاستثمار العقاري المتداولة',
      'عقود آجلة للنفط والذهب',
      'أسهم شركات المرافق والبنية التحتية',
      'العملات الرقمية المستقرة المرتبطة بالذهب'
    ]
  },

  regionalDominance: {
    name: 'استراتيجية الهيمنة الإقليمية',
    description: 'الاستثمار في الشركات السعودية المتوسعة إقليمياً والمشاريع عابرة الحدود',
    expectedReturn: '25-32%',
    riskLevel: 'متوسط',
    timeline: '3-5 سنوات',
    geopoliticalAdvantage: [
      'موقع السعودية الاستراتيجي كمركز للتجارة العالمية',
      'قيادة التعاون الخليجي والتكامل الاقتصادي',
      'الشراكة مع دول بريكس+ والاقتصادات الناشئة',
      'مبادرة الشرق الأوسط الأخضر ودورها القيادي'
    ],
    allocation: {
      crossBorderInfra: 30,
      regionalBanks: 25,
      energyPipelines: 20,
      techHubs: 15,
      tourismCorridors: 10
    },
    megaProjects: [
      'جسر الملك سلمان الرابط بين السعودية ومصر',
      'شبكة السكك الحديدية الخليجية',
      'مراكز البيانات الإقليمية في نيوم',
      'موانئ البحر الأحمر المتكاملة',
      'مصافي النفط المشتركة مع دول آسيوية'
    ]
  }
};