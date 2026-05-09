// Single source of truth for all four versions.
// Update here, every version reflects the change.
window.CONTENT = {
  name: "Satyam Kumar",
  role: "Chief AI Officer · Mixar",
  location: "San Francisco, USA",

  bio: "Chief AI Officer at Mixar, leading the team building an AI-first 3D editor: an intent-centric AI copilot inside Blender that automates modeling, texturing, and shading through ML and vision-language models. My work sits at the intersection of AI, 3D computer vision, and creative tooling. B.Tech in Electrical Engineering (minor in CS) from IIT Gandhinagar; previously built backend systems at Leo1.",

  // Projects: actual things I'm building. Status drives where they show.
  //   active    → currently in flight, shown in `ls now/` on homepage
  //   exploring → research/backlog, shown in `ls now/` on homepage
  //   shipped   → done, only on /projects/
  //   archived  → no longer maintained, only on /projects/
  // Each project links from homepage to /projects/#<slug>.
  projects: [
    {
      slug: "scene-reconstruction",
      title: "Scene reconstruction",
      status: "active",
      period: "2025 - present",
      summary: "ML pipeline that reconstructs end-to-end 3D scenes from 2D images. Foundational layer for downstream AI tooling inside the editor.",
      details: "Reconstructing photorealistic 3D scenes from sparse 2D input is the entry point for any AI-driven 3D workflow. This pipeline takes a small set of images and produces a clean scene representation that downstream Mixar agents can edit, retexture, or animate.",
      stack: ["PyTorch", "Point-cloud transformers", "Multi-view geometry"],
      highlights: [
        "End-to-end: 2D images to a mesh + texture-ready scene.",
        "Robust to sparse views and uncalibrated inputs.",
        "Foundational layer for downstream AI tooling inside the editor."
      ]
    },
    {
      slug: "surface-cutting",
      title: "Surface cutting",
      status: "active",
      period: "2025 - present",
      summary: "Foundational models for intelligent UV unwrapping and seam generation. Implemented SeamGPT from scratch.",
      details: "UV unwrapping is one of the most repetitive parts of 3D content creation. SeamGPT reformulates mesh cutting as autoregressive sequence generation: the model predicts one cut at a time over a quantized representation of the mesh, beating hand-tuned heuristics on real production geometry.",
      stack: ["PyTorch", "Autoregressive transformers", "Point-cloud encoder", "HourGlass decoder"],
      highlights: [
        "61,440-point sampling on vertices and edges preserves geometry while staying tractable.",
        "1024-bin coordinate quantization turns regression into classification.",
        "yzx ordering produces deterministic, comparable sequences.",
        "Outperforms hand-tuned heuristics on real production meshes."
      ]
    },
    {
      slug: "procedural-textures",
      title: "Procedural texture generation",
      status: "active",
      period: "2025 - present",
      summary: "Fine-tuned a vision-language model on a 120K procedural-texture dataset. High-quality synthesis, demoed to leading VFX studios.",
      details: "Procedural textures are node-graph programs, not images. We fine-tune 8B-parameter VLMs to translate between visual references and node graphs. LoRA gives parameter-efficient adaptation; multi-scale dataset training improves generalization across texture complexity.",
      stack: ["VLMs", "LoRA", "Llava_hf", "MiMo-VL-7B-SFT"],
      highlights: [
        "120K curated procedural-texture training set, multi-scale.",
        "LoRA fine-tuning on 8B-parameter VLMs for cost-efficient adaptation.",
        "Demoed to leading VFX studios.",
        "Powers automatic texture authoring inside the Mixar editor."
      ]
    },
    {
      slug: "exploring-next",
      title: "Exploring next",
      status: "exploring",
      period: "ongoing",
      summary: "Mesh retopology, 3D diffusion, and multi-modal embeddings. Pushing the boundaries of ML-for-3D.",
      details: "Notes from the research backlog. Retopology to make AI-generated geometry production-ready; 3D diffusion as a richer generative prior; multi-modal embeddings to unify text, image, and geometry into a single retrieval substrate.",
      stack: [],
      highlights: [
        "Retopology for production-quality geometry from AI output.",
        "3D diffusion as a generative prior over mesh + texture.",
        "Multi-modal embeddings: shared latent across text, image, and 3D."
      ]
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
