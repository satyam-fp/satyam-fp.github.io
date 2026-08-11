// Single source of truth for all four versions.
// Update here, every version reflects the change.
window.CONTENT = {
  name: "Satyam Kumar",
  role: "Chief AI Officer · Mixar",
  location: "San Francisco, USA",

  bio: "Chief AI Officer at Mixar, leading the team building an AI-native 3D editor inside Blender. I work across ML, native desktop systems, agentic backends, GPU infrastructure, and the automation that makes them ship. My current obsession is turning the entire release loop — from semantic UI interaction to agent/GPU execution and visual verification — into a replayable harness designed to unlock up to 10× faster shipping. B.Tech in Electrical Engineering (minor in CS) from IIT Gandhinagar; previously built backend systems at Leo1.",

  // Projects: actual things I'm building. Status drives where they show.
  //   active    → currently in flight, shown in `ls now/` on homepage
  //   exploring → research/backlog, shown in `ls now/` on homepage
  //   shipped   → done, only on /projects/
  //   archived  → no longer maintained, only on /projects/
  // Each project links from homepage to /projects/#<slug>.
  projects: [
    {
      slug: "automated-ship-loop",
      title: "Automated ship loop",
      status: "active",
      period: "Aug 2026 - present",
      summary: "Semantic E2E harness for the real Mixar desktop app and agentic backend — native UI, multi-window workflows, GPU jobs, and state + visual verification. Designed to unlock up to 10× faster shipping.",
      details: "I'm turning one of the hardest product surfaces to test — a custom Blender desktop application connected to a large agentic backend — into a replayable development harness. It drives the built app with real clicks, typing, drags, and file drops; follows work through agent and GPU execution; asserts machine-readable state; and leaves targeted screenshots for visual verification. Every scenario starts clean, and every regression can become a permanent test.",
      stack: ["Python", "Blender", "C++", "WebSockets", "GUI automation", "Visual QA"],
      highlights: [
        "Semantic targets map to operators, properties, and custom-drawn surfaces instead of hard-coded screen coordinates.",
        "Covers native and temporary windows, 3D viewport state, agent turns, file drops, and long-running GPU jobs.",
        "Requires both state assertions and visual evidence before a workflow is considered shipped.",
        "Runs replayable, isolated scenarios; failures stop early instead of contaminating later checks.",
        "Proven on real image-to-3D and retopology jobs, not synthetic UI mocks."
      ]
    },
    {
      slug: "video-pipeline",
      title: "3D-to-video pipeline",
      status: "active",
      period: "May 2026 - present",
      summary: "Stacks IC-LoRA adapters on LTX-2 (22B distilled video diffusion) and renders Blender-driven depth + cryptomatte + first-frame style anchor. ~80s per 5s clip on a single RTX 6000.",
      details: "Geometry and camera come from a 3D scene; material and light come from the prompt. Blender produces the conditioning passes (depth, cryptomatte, first-frame anchor); the runner stacks IC-LoRA adapters on top of LTX-2 and generates per shot.",
      stack: ["LTX-2 (22B)", "IC-LoRA", "Blender", "Cryptomatte", "RTX 6000"],
      highlights: [
        "~80s per 5s clip on a single RTX 6000.",
        "Mapped which LoRA stacks help vs. degrade the 22B distilled checkpoint.",
        "Found the 128-divisible resolution constraint (compound stride: VAE × IC-LoRA reference downscale × patchifier).",
        "Identified the 121-frame single-clip coherence ceiling.",
        "Fixed attention-mask semantics that were wiping out background geometry."
      ]
    },
    {
      slug: "gpu-orchestration",
      title: "GPU orchestration layer",
      status: "active",
      period: "Apr 2026 - present",
      summary: "Self-scaling GPU fleet — VMs auto-register, advertise services, and start receiving routed workloads with zero deploys. Kubernetes-lite for GPU inference.",
      details: "Routes 6 GPU services across 6–22 GB VRAM budgets with 4 priority levels. VRAM-aware dispatching on a 2s loop with 3-attempt exponential backoff (5s–120s), dead-letter queue for credit refunds, and timeout handling for stuck jobs. Real-time fleet dashboard with per-worker health, job lifecycle metrics, and live queue stats.",
      stack: ["Redis", "GPU VMs", "Service discovery", "Real-time dashboard"],
      highlights: [
        "6 GPU services routed across 6–22 GB VRAM budgets, 4 priority levels.",
        "VRAM-aware dispatching with exponential backoff (5s–120s) and DLQ for credit refunds.",
        "Pipelined 8 Redis ops per stats query; batch-loaded jobs via MGET.",
        "Hardened with duplicate-completion prevention and automatic pruning of offline workers."
      ]
    },
    {
      slug: "seam-prediction",
      title: "Seam prediction (SeamNet)",
      status: "active",
      period: "Mar 2026 - present",
      summary: "GNN-based edge classifier for automated UV unwrapping. 96.4% train F1 on 72 meshes; scaled to 38k objects with 0.600 val / 0.618 test F1 across 776 unseen meshes.",
      details: "ML model for automated UV unwrapping. SeamNet uses PyTorch Geometric's TransformerConv with learned edge projections for mesh-based seam classification. Earlier iteration (SeamGPT) framed cutting as autoregressive sequence generation; SeamNet's GNN approach now leads.",
      stack: ["PyTorch Geometric", "TransformerConv", "GNN", "Mixed precision"],
      highlights: [
        "96.4% train F1 on the initial 72-mesh dataset.",
        "Scaled to 38k objects over 100k steps; 0.600 val F1 / 0.618 test F1 on 776 unseen meshes.",
        "Eliminated NaN instabilities via edge-projection normalization and BCEWithLogitsLoss on raw logits.",
        "Regularization sweep across dropout, weight decay, and connectivity loss."
      ]
    },
    {
      slug: "scene-reconstruction",
      title: "Scene reconstruction pipeline",
      status: "active",
      period: "Feb 2026 - present",
      summary: "Single image → full 3D scene in Blender. VGGT for geometry, SAM 3 for segmentation, SAM3D for per-object reconstruction, MoGe for monocular geometry, Claude VLM for semantic labeling.",
      details: "End-to-end pipeline that turns a single photograph into an editable Blender scene. Combines VGGT, SAM 3, SAM3D, and MoGe into a unified inference stack. Per-object mesh recovery, pose estimation, and semantic labeling via Claude VLM. Foundational layer for downstream AI tooling in the editor.",
      stack: ["VGGT", "SAM 3", "SAM3D", "MoGe", "Claude VLM", "Blender", "PyTorch3D"],
      highlights: [
        "Single image to full 3D blockout scene with per-object meshes.",
        "Pointmap sharing across MoGe + DiNO ViT-L + diffusion eliminates redundant depth compute.",
        "Hybrid camera-extrinsics ground-plane detection with EXIF-aware orientation handling.",
        "PyTorch3D coordinate conventions, voxel-based shape representation.",
        "Multi-frame segmentation handling for non-overlapping inputs."
      ]
    },
    {
      slug: "scene-ast",
      title: "Scene-AST",
      status: "exploring",
      period: "ongoing",
      summary: "Structured scene representation for better 3D context retrieval with LLMs.",
      details: "Research direction. An AST-like representation of a 3D scene that LLMs can navigate, reason about, and edit — making 3D context retrieval more reliable than ad-hoc scene dumps.",
      stack: [],
      highlights: [
        "Structured representation that survives round-tripping through an LLM.",
        "Targeted at agent workflows that need to understand and modify Blender scenes."
      ]
    },
    {
      slug: "gh-profile-updater",
      title: "gh-profile-updater",
      status: "shipped",
      period: "Feb 2026",
      summary: "Claude Code plugin that generates impact-driven GitHub profile READMEs from git activity, with automated PR creation and velocity archiving.",
      details: "Released plugin. Generates impact-driven profile READMEs from your git activity, opens a PR with the update, and archives velocity history over time. Auto-clone support means it works without a pre-existing local copy of the profile repo.",
      stack: ["Claude Code", "Plugin SDK", "Git"],
      highlights: [
        "Auto-clone support — runs without a local copy of the profile repo.",
        "Hardened plugin schema and marketplace metadata for reliable discovery and installation."
      ]
    },
    {
      slug: "procedural-textures",
      title: "Procedural texture generation",
      status: "shipped",
      period: "2025",
      summary: "Fine-tuned a VLM on a 120K procedural-texture dataset. High-quality synthesis, demoed to leading VFX studios.",
      details: "Procedural textures are node-graph programs, not images. Fine-tuned 8B-parameter VLMs (Llava_hf, MiMo-VL-7B-SFT) to translate between visual references and node graphs. LoRA for parameter-efficient adaptation; multi-scale dataset training for generalization across texture complexity.",
      stack: ["VLMs", "LoRA", "Llava_hf", "MiMo-VL-7B-SFT"],
      highlights: [
        "120K curated procedural-texture training set, multi-scale.",
        "LoRA fine-tuning on 8B-parameter VLMs for cost-efficient adaptation.",
        "Demoed to leading VFX studios."
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
        "Building a semantic desktop QA harness that connects real UI actions, agent execution, GPU jobs, state assertions, and visual verification into one automated ship loop.",
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
