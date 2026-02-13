// 国际化语言数据
const i18nData = {
  zh: {
    // 页面标题和基本信息
    pageTitle: 'OpenClaw Swarm - 强化学习调研案例',
    chatTitle: '💬 对话记录',
    chatInfo: '强化学习技术调研项目',
    swarmTitle: '🦞 智能体集群工作流',
    previewTitle: '📊 生成成果预览',

    // 按钮文本
    btnRoadmap: '🗺️ 路线图',
    btnReport: '📄 完整报告',
    btnNewTab: '🔗 新标签打开',

    // 工作流阶段
    stageAnalysis: '📋 任务分析',
    stageDecompose: '🔧 任务拆解',
    stageResearch: '🔍 Phase 1: 并行调研',
    stageWriting: '✍️ Phase 2: 分章节撰写',
    stageAssembly: '🎯 Phase 3: 脚本汇总',

    // 统计信息
    statsTitle: '📊 执行统计',
    statsTotalTime: '总耗时',
    statsTotalWords: '总字数',
    statsOptimization: '并行优化',
    statsAgents: '智能体数量',
    filesTitle: '📁 生成文件',

    // 智能体卡片
    agentMain: '主智能体',
    agentResearcher: 'Researcher',
    agentWriter: 'Writer',
    agentAssembly: 'Assembly Script',

    // 任务描述
    taskAnalyze: '分析用户需求',
    taskDecompose: '拆解为4个并行调研 + 5个并行写作',
    taskArxiv: 'Arxiv 学术论文',
    taskGithub: 'GitHub 开源项目',
    taskIndustry: '行业应用调研',
    taskTutorial: '学习资源/教程',
    taskChapter00: 'ch00 摘要+背景',
    taskChapter02: 'ch02 核心算法',
    taskChapter03: 'ch03 开源生态',
    taskChapter04: 'ch04 应用案例',
    taskChapter06: 'ch06 路线图+结论',
    taskAssemble: '拼接所有章节生成完整报告',

    // 状态
    statusCompleted: '✅ 完成',
    statusInProgress: '⏳ 进行中',
    statusCompletedFast: '✅ 已完成 (<1s)',

    // 发送者名称
    senderUser: 'orange',
    senderAgent: '智能体集群',

    // 对话内容
    chatData: [
      {
        type: 'user',
        sender: 'orange',
        time: '2026年2月13日 14:05',
        content: '调研强化学习技术并写一篇分析报告,分别从Arxiv、github、网络渠道、各种教程中进行信息检索并对信息汇总,生成一个完整的文档,最后生成一副路线图来展示完整的智能体强化学习发展脉络，分批生成报告最后汇总。'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月13日 14:05',
        content: `好的！这是一个大型调研任务，我用分段策略来执行。

<h3>编排方案:</h3>
<pre>
Phase 1: 并行调研 (4 个 researcher)
├── 🔍 学术论文调研 (Arxiv)
├── 🔍 开源项目调研 (GitHub)
├── 🔍 行业应用调研 (网络渠道)
└── 🔍 学习资源调研 (教程/课程)

Phase 2: 分章节撰写 (writer)
├── ✍️ 摘要+背景
├── ✍️ 核心算法
├── ✍️ 开源生态
├── ✍️ 应用案例
└── ✍️ 发展路线图

Phase 3: 汇总
└── 🎯 脚本拼接完整报告
</pre>

<strong>开始执行：</strong><br>
🚀 Phase 1: 并行调研 已派发

<table>
<tr><th>智能体</th><th>调研方向</th><th>状态</th></tr>
<tr><td>🔍 researcher</td><td>Arxiv 学术论文</td><td>⏳ 进行中</td></tr>
<tr><td>🔍 researcher</td><td>GitHub 开源项目</td><td>⏳ 进行中</td></tr>
<tr><td>🔍 researcher</td><td>行业应用案例</td><td>⏳ 进行中</td></tr>
<tr><td>🔍 researcher</td><td>学习资源教程</td><td>⏳ 进行中</td></tr>
</table>

<p>4 个调研任务并行执行，预计 2-3 分钟完成。完成后进入 Phase 2 分章节撰写，最后汇总生成完整报告 + 发展路线图。</p>

<p>✅ <strong>Arxiv 学术论文调研</strong>完成！涵盖 DQN/PPO/SAC 等经典算法，以及 DPO/IPO/KTO 等最新偏好学习方法。</p>
<p>⏳ 还有 3 个调研任务进行中...</p>

<p>✅ <strong>行业应用调研</strong>完成！涵盖游戏 AI (AlphaGo/OpenAI Five)、机器人控制、推荐系统、LLM 对齐等领域的实际案例。</p>
<p>⏳ 还有 2 个调研任务进行中...</p>`
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月13日 14:12',
        content: '强化学习调研任务正在进行中，已完成 2/4 个调研（Arxiv 学术论文 ✅、行业应用 ✅），还有 GitHub 开源项目和学习资源教程在跑。<br><br>完成后会自动进入撰写和汇总阶段，预计 10 分钟内完成整个报告。'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月13日 14:16',
        content: '✅ <strong>GitHub 开源项目调研</strong>完成！<br><br>让我检查一下所有调研文件：'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月13日 14:16',
        content: `🎉 <strong>4 个调研任务全部完成</strong>！现在进入 <strong>Phase 2: 分章节撰写报告</strong>：

<p><strong>Phase 2: 分章节撰写</strong> 已派发（5 个 writer 并行）</p>

<table>
<tr><th>章节</th><th>内容</th><th>状态</th></tr>
<tr><td>ch00</td><td>摘要+背景</td><td>⏳ 撰写中</td></tr>
<tr><td>ch02</td><td>核心算法</td><td>⏳ 撰写中</td></tr>
<tr><td>ch03</td><td>开源生态</td><td>⏳ 撰写中</td></tr>
<tr><td>ch04</td><td>应用案例+学习路线</td><td>⏳ 撰写中</td></tr>
<tr><td>ch06</td><td>路线图+结论</td><td>⏳ 撰写中</td></tr>
</table>

<p>完成后我会再派发<strong>发展路线图</strong>的生成任务，最后汇总成完整报告。</p>`
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月13日 14:17',
        content: '✅ <strong>开源生态章节</strong>完成，包含 6 个主流框架对比和 8 种场景的推荐方案。<br><br>⏳ 还有 4 个章节在写...'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月13日 14:17',
        content: '✅ <strong>摘要+背景章节</strong>也完成了，梳理了从 Bellman 动态规划到 DPO 的技术演进脉络。<br><br>⏳ 还有 3 个章节在写（核心算法 + 应用案例 + 路线图）...'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月13日 14:17',
        content: '✅ <strong>核心算法章节</strong>完成，包含经典算法对比表和 RLHF→DPO→IPO/KTO 演进路径图。<br><br>⏳ 还有 2 个章节在写（应用案例 + 路线图）...'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月13日 14:18',
        content: '✅ <strong>应用案例+学习路线章节</strong>完成！<br><br>🎉 <strong>所有章节撰写完毕</strong>，现在生成发展路线图并汇总报告：'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月13日 14:18',
        content: `<strong>Phase 2 完成进度</strong>：

<table>
<tr><th>章节</th><th>状态</th></tr>
<tr><td>ch00-摘要+背景</td><td>✅</td></tr>
<tr><td>ch02-核心算法</td><td>✅</td></tr>
<tr><td>ch03-开源生态</td><td>✅</td></tr>
<tr><td>ch04-应用案例+学习路线</td><td>✅</td></tr>
<tr><td>ch06-路线图+结论</td><td>⏳ 撰写中</td></tr>
</table>

<p>路线图完成后立即汇总并发送完整报告。</p>`
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月13日 14:19',
        content: '✅ <strong>发展路线图+结论</strong>完成！包含 1957-2025 完整时间线和三大技术分支脉络图。<br><br>现在汇总所有章节：<br><br>报告已生成！现在发送给你：'
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月13日 14:19',
        content: `✅ <strong>报告已发送！</strong>

<h3>📄 智能体强化学习技术深度分析报告</h3>

<ul>
<li>578 行，约 38KB（~10000 字）</li>
<li>完整发展路线图（1957-2025）</li>
<li>三大技术分支脉络图</li>
</ul>

<h3>📊 智能体团队执行统计</h3>

<table>
<tr><th>阶段</th><th>任务</th><th>智能体</th><th>耗时</th></tr>
<tr><td><strong>调研</strong></td><td>Arxiv/GitHub/行业/教程</td><td>🔍×4</td><td>~2min (并行)</td></tr>
<tr><td><strong>撰写</strong></td><td>摘要+5章节+路线图</td><td>✍️×5</td><td>~3min (并行)</td></tr>
<tr><td><strong>汇总</strong></td><td>脚本拼接</td><td>🎯</td><td>&lt;1s</td></tr>
</table>

<p><strong>总耗时</strong>：约 <strong>15 分钟</strong></p>

<h3>报告结构：</h3>

<ol>
<li>摘要 + 研究背景</li>
<li>核心算法（DQN→PPO→DPO 演进）</li>
<li>开源生态（6 大框架对比）</li>
<li>行业应用（游戏/机器人/推荐/LLM对齐）</li>
<li>学习路线（入门→进阶→实战）</li>
<li>发展路线图 + 结论</li>
</ol>`
      },
      {
        type: 'agent',
        sender: '智能体集群',
        time: '2026年2月13日 14:24',
        content: `✅ <strong>路线图已发送！</strong>

<h3>📊 包含：</h3>
<ul>
<li>四个发展时期（1957-2025）的时间线</li>
<li>关键里程碑节点（Bellman → DQN → AlphaGo → PPO → ChatGPT RLHF → DPO）</li>
<li>三大技术分支（Value-Based / Policy-Based / Model-Based）</li>
</ul>`
      }
    ]
  },

  en: {
    // Page titles and basic info
    pageTitle: 'OpenClaw Swarm - Reinforcement Learning Research Case',
    chatTitle: '💬 Chat History',
    chatInfo: 'Reinforcement Learning Technology Research Project',
    swarmTitle: '🦞 Agent Swarm Workflow',
    previewTitle: '📊 Generated Results Preview',

    // Button text
    btnRoadmap: '🗺️ Roadmap',
    btnReport: '📄 Full Report',
    btnNewTab: '🔗 Open in New Tab',

    // Workflow stages
    stageAnalysis: '📋 Task Analysis',
    stageDecompose: '🔧 Task Decomposition',
    stageResearch: '🔍 Phase 1: Parallel Research',
    stageWriting: '✍️ Phase 2: Chapter Writing',
    stageAssembly: '🎯 Phase 3: Assembly',

    // Statistics
    statsTitle: '📊 Execution Statistics',
    statsTotalTime: 'Total Time',
    statsTotalWords: 'Total Words',
    statsOptimization: 'Parallel Optimization',
    statsAgents: 'Number of Agents',
    filesTitle: '📁 Generated Files',

    // Agent cards
    agentMain: 'Main Agent',
    agentResearcher: 'Researcher',
    agentWriter: 'Writer',
    agentAssembly: 'Assembly Script',

    // Task descriptions
    taskAnalyze: 'Analyze user requirements',
    taskDecompose: 'Decompose into 4 parallel research + 5 parallel writing tasks',
    taskArxiv: 'Arxiv Academic Papers',
    taskGithub: 'GitHub Open Source Projects',
    taskIndustry: 'Industry Applications Research',
    taskTutorial: 'Learning Resources/Tutorials',
    taskChapter00: 'ch00 Abstract+Background',
    taskChapter02: 'ch02 Core Algorithms',
    taskChapter03: 'ch03 Open Source Ecosystem',
    taskChapter04: 'ch04 Application Cases',
    taskChapter06: 'ch06 Roadmap+Conclusion',
    taskAssemble: 'Assemble all chapters into complete report',

    // Status
    statusCompleted: '✅ Completed',
    statusInProgress: '⏳ In Progress',
    statusCompletedFast: '✅ Completed (<1s)',

    // Sender names
    senderUser: 'orange',
    senderAgent: 'Agent Swarm',

    // Chat data
    chatData: [
      {
        type: 'user',
        sender: 'orange',
        time: 'Feb 13, 2026 14:05',
        content: 'Research reinforcement learning technology and write an analysis report. Retrieve information from Arxiv, Github, web channels, and various tutorials. Generate a complete document and finally create a roadmap to show the complete development context of agent reinforcement learning. Generate the report in batches and then summarize.'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 13, 2026 14:05',
        content: `Understood! This is a large research task, I will execute it using a segmented strategy.

<h3>Orchestration Plan:</h3>
<pre>
Phase 1: Parallel Research (4 researchers)
├── 🔍 Academic Papers Research (Arxiv)
├── 🔍 Open Source Projects Research (GitHub)
├── 🔍 Industry Applications Research (Web)
└── 🔍 Learning Resources Research (Tutorials/Courses)

Phase 2: Chapter Writing (writers)
├── ✍️ Abstract+Background
├── ✍️ Core Algorithms
├── ✍️ Open Source Ecosystem
├── ✍️ Application Cases
└── ✍️ Development Roadmap

Phase 3: Assembly
└── 🎯 Script Assembly of Complete Report
</pre>

<strong>Starting Execution:</strong><br>
🚀 Phase 1: Parallel Research Dispatched

<table>
<tr><th>Agent</th><th>Research Direction</th><th>Status</th></tr>
<tr><td>🔍 researcher</td><td>Arxiv Academic Papers</td><td>⏳ In Progress</td></tr>
<tr><td>🔍 researcher</td><td>GitHub Open Source Projects</td><td>⏳ In Progress</td></tr>
<tr><td>🔍 researcher</td><td>Industry Application Cases</td><td>⏳ In Progress</td></tr>
<tr><td>🔍 researcher</td><td>Learning Resource Tutorials</td><td>⏳ In Progress</td></tr>
</table>

<p>4 research tasks executing in parallel, estimated to complete in 2-3 minutes. After completion, enter Phase 2 chapter writing, and finally assemble complete report + development roadmap.</p>

<p>✅ <strong>Arxiv Academic Papers Research</strong> completed! Covers classic algorithms such as DQN/PPO/SAC, as well as latest preference learning methods like DPO/IPO/KTO.</p>
<p>⏳ 3 more research tasks in progress...</p>

<p>✅ <strong>Industry Applications Research</strong> completed! Covers actual cases in fields such as game AI (AlphaGo/OpenAI Five), robot control, recommendation systems, and LLM alignment.</p>
<p>⏳ 2 more research tasks in progress...</p>`
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 13, 2026 14:12',
        content: 'Reinforcement learning research task in progress, completed 2/4 research tasks (Arxiv Academic Papers ✅, Industry Applications ✅), GitHub open source projects and learning resources tutorials still running.<br><br>Will automatically enter writing and assembly stage after completion, estimated to complete the entire report within 10 minutes.'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 13, 2026 14:16',
        content: '✅ <strong>GitHub Open Source Projects Research</strong> completed!<br><br>Let me check all research files:'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 13, 2026 14:16',
        content: `🎉 <strong>All 4 research tasks completed</strong>! Now entering <strong>Phase 2: Chapter Writing</strong>:

<p><strong>Phase 2: Chapter Writing</strong> dispatched (5 writers in parallel)</p>

<table>
<tr><th>Chapter</th><th>Content</th><th>Status</th></tr>
<tr><td>ch00</td><td>Abstract+Background</td><td>⏳ Writing</td></tr>
<tr><td>ch02</td><td>Core Algorithms</td><td>⏳ Writing</td></tr>
<tr><td>ch03</td><td>Open Source Ecosystem</td><td>⏳ Writing</td></tr>
<tr><td>ch04</td><td>Application Cases+Learning Path</td><td>⏳ Writing</td></tr>
<tr><td>ch06</td><td>Roadmap+Conclusion</td><td>⏳ Writing</td></tr>
</table>

<p>After completion, I will dispatch the <strong>Development Roadmap</strong> generation task, and finally assemble into a complete report.</p>`
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 13, 2026 14:17',
        content: '✅ <strong>Open Source Ecosystem Chapter</strong> completed, includes comparison of 6 mainstream frameworks and recommendations for 8 scenarios.<br><br>⏳ 4 more chapters in writing...'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 13, 2026 14:17',
        content: '✅ <strong>Abstract+Background Chapter</strong> also completed, sorted out the technical evolution from Bellman dynamic programming to DPO.<br><br>⏳ 3 more chapters in writing (Core Algorithms + Application Cases + Roadmap)...'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 13, 2026 14:17',
        content: '✅ <strong>Core Algorithms Chapter</strong> completed, includes classic algorithm comparison table and RLHF→DPO→IPO/KTO evolution path diagram.<br><br>⏳ 2 more chapters in writing (Application Cases + Roadmap)...'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 13, 2026 14:18',
        content: '✅ <strong>Application Cases+Learning Path Chapter</strong> completed!<br><br>🎉 <strong>All chapters completed</strong>, now generating development roadmap and assembling report:'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 13, 2026 14:18',
        content: `<strong>Phase 2 Completion Progress</strong>:

<table>
<tr><th>Chapter</th><th>Status</th></tr>
<tr><td>ch00-Abstract+Background</td><td>✅</td></tr>
<tr><td>ch02-Core Algorithms</td><td>✅</td></tr>
<tr><td>ch03-Open Source Ecosystem</td><td>✅</td></tr>
<tr><td>ch04-Application Cases+Learning Path</td><td>✅</td></tr>
<tr><td>ch06-Roadmap+Conclusion</td><td>⏳ Writing</td></tr>
</table>

<p>Roadmap will be assembled and complete report sent immediately after completion.</p>`
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 13, 2026 14:19',
        content: '✅ <strong>Development Roadmap+Conclusion</strong> completed! Includes complete 1957-2025 timeline and three major technical branch context diagrams.<br><br>Now assembling all chapters:<br><br>Report generated! Sending to you now:'
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 13, 2026 14:19',
        content: `✅ <strong>Report Sent!</strong>

<h3>📄 Agent Reinforcement Learning Technology In-depth Analysis Report</h3>

<ul>
<li>578 lines, approximately 38KB (~10000 words)</li>
<li>Complete development roadmap (1957-2025)</li>
<li>Three major technical branch context diagrams</li>
</ul>

<h3>📊 Agent Team Execution Statistics</h3>

<table>
<tr><th>Stage</th><th>Tasks</th><th>Agents</th><th>Time</th></tr>
<tr><td><strong>Research</strong></td><td>Arxiv/GitHub/Industry/Tutorials</td><td>🔍×4</td><td>~2min (parallel)</td></tr>
<tr><td><strong>Writing</strong></td><td>Abstract+5 chapters+Roadmap</td><td>✍️×5</td><td>~3min (parallel)</td></tr>
<tr><td><strong>Assembly</strong></td><td>Script Assembly</td><td>🎯</td><td>&lt;1s</td></tr>
</table>

<p><strong>Total Time</strong>: approximately <strong>15 minutes</strong></p>

<h3>Report Structure:</h3>

<ol>
<li>Abstract + Research Background</li>
<li>Core Algorithms (DQN→PPO→DPO Evolution)</li>
<li>Open Source Ecosystem (6 major framework comparisons)</li>
<li>Industry Applications (Games/Robotics/Recommendation/LLM Alignment)</li>
<li>Learning Path (Beginner→Advanced→Practice)</li>
<li>Development Roadmap + Conclusion</li>
</ol>`
      },
      {
        type: 'agent',
        sender: 'Agent Swarm',
        time: 'Feb 13, 2026 14:24',
        content: `✅ <strong>Roadmap Sent!</strong>

<h3>📊 Includes:</h3>
<ul>
<li>Timeline of four development periods (1957-2025)</li>
<li>Key milestone nodes (Bellman → DQN → AlphaGo → PPO → ChatGPT RLHF → DPO)</li>
<li>Three major technical branches (Value-Based / Policy-Based / Model-Based)</li>
</ul>`
      }
    ]
  }
};

// 获取当前语言
function getCurrentLanguage() {
  return localStorage.getItem('language') || 'zh';
}

// 设置语言
function setLanguage(lang) {
  localStorage.setItem('language', lang);
}

// 获取翻译文本
function t(key) {
  const lang = getCurrentLanguage();
  const keys = key.split('.');
  let value = i18nData[lang];

  for (const k of keys) {
    value = value[k];
    if (value === undefined) {
      console.warn(`Translation missing for key: ${key} in language: ${lang}`);
      return key;
    }
  }

  return value;
}
