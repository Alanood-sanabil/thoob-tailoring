const CONTENT = {
  brand: {
    nameAr: "رفيف",
    nameEn: "Rafeef",
    tagline: "خياطة سعودية فاخرة",
    taglineEn: "Saudi Luxury Tailoring"
  },

  nav: {
    links: [
      { label: "الرئيسية", href: "#hero" },
      { label: "من نحن",   href: "#about" },
      { label: "اطلب الآن", href: "#order", highlight: true }
    ]
  },

  hero: {
    badge:      "خياطة فاخرة على مقاسك",
    heading:    "رفيف",
    subheading: "نصلك أينما كنت في المملكة",
    cta:        "اطلب الآن"
  },

  about: {
    label:   "خدمتنا",
    heading: "الخياطة تأتي إليك",
    body:    "نقدم لك خدمة خياطة الأثواب السعودية الفاخرة في منزلك، بأيدي خبراء متخصصين وأقمشة عالية الجودة.",
    features: [
      { title: "في منزلك",          desc: "نأتي إليك أينما كنت داخل المملكة" },
      { title: "ينتهي خلال ٣ أيام", desc: "تفصيل احترافي وتسليم سريع في ٣ أيام فقط" },
      { title: "جودة عالية",        desc: "أقمشة مختارة بعناية لكل موسم" }
    ]
  },

  form: {
    label:   "اطلب الآن",
    heading: "اطلب ثوبك المفصّل",
    subtext: "أدخل بياناتك وسنتواصل معك خلال 24 ساعة",

    thoobTypes: [
      { id: "white",  valueAr: "ثوب أبيض", valueEn: "White Thoob" },
      { id: "winter", valueAr: "ثوب شتوي", valueEn: "Winter Thoob" }
    ],

    fields: {
      name:  { label: "الاسم الكامل", placeholder: "محمد عبدالله",  error: "يرجى إدخال الاسم الكامل" },
      phone: { label: "رقم الجوال",   placeholder: "05XXXXXXXX",    error: "يرجى إدخال رقم جوال صحيح" },
      city:  { label: "المدينة",      placeholder: "اختر مدينتك",   error: "يرجى اختيار المدينة" },
      notes: { label: "ملاحظات إضافية", optionalLabel: "(اختياري)", placeholder: "المقاس، طول الثوب، أي تفاصيل إضافية..." }
    },

    cities: ["الرياض", "جدة", "الخبر"],

    submitBtn:    "إرسال الطلب",
    successTitle: "تم إرسال طلبك!",
    successMsg:   "شكراً لك، سيتواصل معك فريق رفيف على رقم جوالك لتأكيد الطلب والمقاسات."
  },

  footer: {
    copyright: "© 2025 رفيف — جميع الحقوق محفوظة"
  }
};
