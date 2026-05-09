// Single source of truth for all four versions.
// Update here, every version reflects the change.
window.CONTENT = {
  name: "Satyam Kumar",
  role: "Chief AI Officer · Mixar",
  location: "Mumbai, India",

  bio: "Chief AI Officer at Mixar, leading the team building an AI-first 3D editor: an intent-centric AI copilot inside Blender that automates modeling, texturing, and shading through ML and vision-language models. My work sits at the intersection of AI, 3D computer vision, and creative tooling. B.Tech in Electrical Engineering (minor in CS) from IIT Gandhinagar; previously built backend systems at Leo1.",

  now: [
    {
      title: "Scene reconstruction",
      summary: "Engineered an ML pipeline that reconstructs end-to-end 3D scenes from 2D images. Foundational layer for downstream AI tooling inside the editor."
    },
    {
      title: "Surface cutting",
      summary: "Building foundational models for intelligent UV unwrapping and seam generation. Implemented SeamGPT from scratch: autoregressive mesh cutting, point cloud encoder, HourGlass decoder, 61,440-point sampling, 1024-bin quantization."
    },
    {
      title: "Procedural texture generation",
      summary: "Fine-tuned a vision-language model on a 120K procedural-texture dataset, achieving high-quality synthesis. Showcased to leading VFX studios."
    },
    {
      title: "Exploring next",
      summary: "Mesh retopology, 3D diffusion, and multi-modal embeddings. Pushing the boundaries of ML-for-3D."
    }
  ],

  work: [
    {
      company: "Mixar",
      role: "Chief AI Officer",
      period: "Aug 2025 - present",
      location: "Gurugram",
      notes: [
        "Lead a specialized team developing an AI-first 3D editor.",
        "Lead R&D on foundational models for spatial understanding.",
        "Three pillars: scene reconstruction, surface cutting, procedural texture generation.",
        "Showcased VLM-driven procedural textures to leading VFX studios."
      ]
    },
    {
      company: "Mixar",
      role: "Founding ML Engineer",
      period: "Jan 2025 - Aug 2025",
      location: "Gurugram",
      notes: [
        "Implemented SeamGPT from scratch: autoregressive mesh cutting + UV unwrapping.",
        "LoRA fine-tuning of 8B-parameter VLMs (Llava_hf, MiMo-VL-7B-SFT) for procedural textures.",
        "Forked Blender to embed AI agents directly inside the editor.",
        "Set the technical foundation for the Mixar copilot."
      ]
    },
    {
      company: "Leo1 (Financepeer)",
      role: "SDE-I",
      period: "May 2022 - Dec 2024",
      location: "Mumbai",
      notes: [
        "Series B ($31M) fintech for educational lending.",
        "Cut post-disbursal processing time 50% and errors 80% via LMS integration.",
        "Built the Business Rule Engine that automated loan approvals. 5× less manual work.",
        "Built a payment-unification microservice handling millions of transactions daily."
      ]
    }
  ],

  reading: [
    {
      paper: "SeamGPT: Autoregressive Mesh Cutting for UV Unwrapping",
      date: "2025-01",
      note: "Reformulates 3D mesh cutting as autoregressive sequence generation. Strategic 61,440-point sampling on vertices/edges; 1024-bin coordinate quantization turns regression into classification. yzx ordering for deterministic sequences."
    },
    {
      paper: "VLMaterial: Vision-Language Models for Material Generation",
      date: "2025-01",
      note: "VLMs adapted to node-based procedural workflows. LoRA enables efficient adaptation; multi-scale dataset training improves generalization across texture complexities."
    },
    {
      paper: "Attention Is All You Need (Vaswani et al.)",
      date: "2024-12",
      note: "Foundational re-read. Self-attention as a way to weight input parts; positional encoding preserves sequence; multi-head attention covers different representation subspaces."
    },
    {
      paper: "LoRA: Low-Rank Adaptation of Large Language Models (Hu et al.)",
      date: "2024-11",
      note: "Low-rank decomposition for parameter-efficient fine-tuning of billion-parameter models. Rank choice trades off adaptation quality vs compute. Adapters compose for multi-task."
    },
    {
      paper: "NeRF: Representing Scenes as Neural Radiance Fields (Mildenhall et al.)",
      date: "2024-11",
      note: "Implicit neural scene representation. Volume rendering through an MLP gives photorealistic novel views; positional encoding is essential for high-frequency detail."
    },
    {
      paper: "Point Cloud Transformers for 3D Understanding",
      date: "2024-12",
      note: "Cross/self-attention over unordered point sets; strategic sampling preserves geometry while staying tractable. Backbone for SeamGPT's shape encoder."
    }
  ],

  contact: {
    email: "satyam.kr1501@gmail.com",
    github: "https://github.com/satyam-fp",
    linkedin: "https://linkedin.com/in/satyamkumar29",
    x: "https://x.com/_satyam_ai",
    blog: "/blog/"
  },

  // Add posts here as you write them. Latest first.
  // Shape: { slug, title, date: "YYYY-MM-DD", summary }
  // The homepage shows the 3 most recent inline; /blog/ shows the full archive.
  posts: []
};
