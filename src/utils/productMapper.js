export function mapProductToWellness(product) {
  if (!product) return null;

  const wellnessMap = {
    1: {
      title: "Organic Bamboo Loungewear Tee",
      category: "Unisex Loungewear",
      description: "Crafted from 100% organic bamboo fiber, this breathable tee offers unparalleled softness and moisture-wicking comfort for daily wear."
    },
    2: {
      title: "Active Comfort Support Tee",
      category: "Loungewear",
      description: "Designed for gentle daily activity and relaxation, featuring flatlock seams to minimize friction and ensure comfort."
    },
    3: {
      title: "Breathable Everyday Cotton Jacket",
      category: "Loungewear",
      description: "A lightweight, super-soft layer made from premium long-staple organic cotton, ideal for cooler evenings and self-care routines."
    },
    4: {
      title: "Bamboo Cotton Active Tee",
      category: "Loungewear",
      description: "Ultra-breathable tee made with a blend of organic bamboo and combed cotton, naturally hypoallergenic and gentle on sensitive skin."
    },
    5: {
      title: "Rose Quartz Stress-Relief Bracelet",
      category: "Self-Care Accessories",
      description: "Handcrafted Rose Quartz beads believed to encourage self-love, peace, and emotional wellness during busy days."
    },
    6: {
      title: "Calming Amethyst Balance Pendant",
      category: "Self-Care Accessories",
      description: "Featuring a natural raw amethyst stone to help ground your thoughts and promote mindfulness throughout the week."
    },
    7: {
      title: "Aromatherapy Diffuser Locket Ring",
      category: "Self-Care Accessories",
      description: "A premium stainless steel locket ring designed to hold a drop of your favorite calming lavender essential oil."
    },
    8: {
      title: "Rose Quartz Face Massage Roller",
      category: "Self-Care Accessories",
      description: "Enhance your nightly skincare ritual. Helps release facial tension, improve circulation, and soothe sensitive skin."
    },
    9: {
      title: "Ionic Facial Steam Humidifier",
      category: "Wellness Devices",
      description: "A premium ionic steamer designed to open pores, deeply hydrate the skin, and prepare it for nourishing oils."
    },
    10: {
      title: "Ultra-Quiet Smart Sleep Humidifier",
      category: "Wellness Devices",
      description: "Create the perfect relaxing bedroom atmosphere with adjustable misting levels and soothing warm ambient lighting."
    },
    11: {
      title: "Smart Jade Neck & Face Massager",
      category: "Wellness Devices",
      description: "Features sonic vibrations and gentle heat to help lift and contour the neck and jawline while relieving stress."
    },
    12: {
      title: "Therapeutic Heating Pad",
      category: "Wellness Devices",
      description: "Provides targeted soothing heat to relieve cramps and muscle tension, designed with ultra-plush washable fabric."
    },
    13: {
      title: "Aroma Therapy Mist Diffuser",
      category: "Wellness Devices",
      description: "Compact mist diffuser featuring ultrasonic technology to disperse soothing essential oils without heating."
    },
    14: {
      title: "Deep Hydration Skin Infuser",
      category: "Wellness Devices",
      description: "Uses micro-current technology to assist in the deep absorption of serums, creams, and natural wellness oils."
    },
    15: {
      title: "Seamless High-Waist Sleep Pant",
      category: "Feminine Care & Lounge",
      description: "Designed for ultimate overnight security and comfort, crafted from breathable modal cotton with leak-proof lining."
    },
    16: {
      title: "Organic Cotton Nursing Bralette",
      category: "Feminine Care & Lounge",
      description: "Wire-free, ultra-soft support bra designed to adjust to your body's natural changes with absolute comfort."
    },
    17: {
      title: "Sensory Ribbed Lounge Slip Dress",
      category: "Feminine Care & Lounge",
      description: "Lightweight and incredibly stretchy dress crafted from plant-based modal, offering a soothing fit for lounging."
    },
    18: {
      title: "Bamboo Maternity Comfort Dress",
      category: "Feminine Care & Lounge",
      description: "Designed to grow with you. Luxuriously soft bamboo-derived viscose keeps you cool and comfortable all day."
    },
    19: {
      title: "Comfy Relaxed Fit Joggers",
      category: "Loungewear",
      description: "Super-soft French terry joggers featuring a supportive elastic waistband that never digs into your skin."
    },
    20: {
      title: "Everyday Relaxed Lounge Sweatshirt",
      category: "Loungewear",
      description: "Crafted with cloud-like fleece lining, perfect for wrapping yourself in comfort post-workout or during slow mornings."
    }
  };

  const mapped = wellnessMap[product.id] || {
    title: product.title,
    category: product.category,
    description: product.description
  };

  return {
    ...product,
    title: mapped.title,
    category: mapped.category,
    description: mapped.description
  };
}
