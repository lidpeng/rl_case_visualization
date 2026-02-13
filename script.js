// 对话数据
const chatData = [
  {
    type: 'user',
    sender: 'orange',
    time: '2026年2月11日 12:12',
    content: '@智能体集群 调研强化学习技术并写一篇分析报告,分别从Arxiv、github、飞书文档进行信息检索并对信息汇总,生成一个完整的文档,最后生成一副路线图来展示完整的智能体强化学习发展脉络。'
  },
  {
    type: 'agent',
    sender: '智能体集群',
    time: '2026年2月11日 12:13',
    content: `收到!这次我会完整执行并输出成本统计。开始调度智能体团队:

<h3>任务分解:</h3>
<table>
<tr><th>阶段</th><th>智能体</th><th>任务</th><th>模式</th></tr>
<tr><td>1</td><td>🔍 researcher ×3</td><td>Arxiv/GitHub/飞书调研</td><td>并行</td></tr>
<tr><td>2</td><td>✍️ writer</td><td>汇总撰写分析报告</td><td>串行</td></tr>
<tr><td>3</td><td>🎨 designer</td><td>生成发展路线图</td><td>串行</td></tr>
</table>

<strong>阶段 1: 并行调研</strong><br>
3 个研究员已启动并行调研! 🔍🔍🔍

<pre>
任务: 🔍 Arxiv 调研      状态: 进行中...  预计完成: ~4分钟
任务: 🔍 GitHub 调研     状态: 进行中...  预计完成: ~4分钟
任务: 🔍 飞书/中文调研    状态: 进行中...  预计完成: ~3分钟
任务: ✍️ 撰写报告        状态: 等待调研完成 预计完成: -
任务: 🎨 路线图          状态: 等待报告完成 预计完成: -
</pre>

调研完成后我会继续派 writer 写报告、designer 画路线图,最后输出完整的成本统计~`
  },
  {
    type: 'agent',
    sender: '智能体集群',
    time: '2026年2月11日 12:15',
    content: '✅ <strong>GitHub 调研完成</strong> (2m17s, 29.6k tokens)<br><br>覆盖了 Stable-Baselines3、RLlib、TRL、LangChain 等 11 个热门项目,还整理了 4 条学习路径。<br><br>还有 2 个 researcher 在跑(Arxiv + 飞书),等齐了就开始写报告~'
  },
  {
    type: 'agent',
    sender: '智能体集群',
    time: '2026年2月11日 12:15',
    content: '✅ <strong>飞书/中文调研完成</strong> (2m20s, 20.1k tokens)<br><br>找到 50+ 篇中文资料,包括阿里 ROLL、字节 verl、中科大 Agent-R1 等国内前沿实践,还整理了蘑菇书 EasyRL 等学习资源。<br><br>就差 Arxiv 那边了,马上齐活!🏃'
  },
  {
    type: 'agent',
    sender: '智能体集群',
    time: '2026年2月11日 12:16',
    content: '✅ <strong>Arxiv 调研完成</strong> (3m7s)<br><br>---<br><br><strong>🎉 阶段 1 全部完成!</strong> 现在进入阶段 2:派 writer 撰写报告,然后 designer 画路线图。'
  },
  {
    type: 'agent',
    sender: '智能体集群',
    time: '2026年2月11日 12:16',
    content: `<strong>阶段 2 启动: Writer 正在撰写报告</strong> ✍️

<pre>
| 阶段  | 智能体                    | 状态       | 耗时    |
| --- | ---------------------- | -------- | ----- |
| 1-1 | 🔍 researcher (Arxiv)  | ✅ 完成     | 3m7s  |
| 1-2 | 🔍 researcher (GitHub) | ✅ 完成     | 2m17s |
| 1-3 | 🔍 researcher (飞书)     | ✅ 完成     | 2m20s |
| 2   | ✍️ writer              | 进行中... | ~5分钟  |
| 3   | 🎨 designer            | 等待中      | -     |
</pre>

报告写完后我会派 designer 画路线图,最后输出完整成本统计!`
  },
  {
    type: 'agent',
    sender: '智能体集群',
    time: '2026年2月11日 12:18',
    content: '✅ <strong>报告撰写完成</strong> (1m32s, 26.9k tokens)<br><br>整合了三方资料,完成了 4000+ 字的分析报告,重点覆盖了 DeepSeek-R1、o1、DPO、DreamerV3 等最新进展。<br><br>---<br><br><strong>阶段 3: 派 Designer 生成路线图</strong>'
  },
  {
    type: 'agent',
    sender: '智能体集群',
    time: '2026年2月11日 12:18',
    content: `<strong>阶段 3 启动: Designer 正在生成路线图</strong> 🎨

<pre>
| 阶段  | 智能体           | 模型           | 状态       | 耗时    | Tokens |
| --- | ------------- | ------------ | -------- | ----- | ------ |
| 1-1 | 🔍 researcher | GLM          | ✅ 完成     | 3m7s  | ~30k   |
| 1-2 | 🔍 researcher | GLM          | ✅ 完成     | 2m17s | 29.6k  |
| 1-3 | 🔍 researcher | GLM          | ✅ 完成     | 2m20s | 20.1k  |
| 2   | ✍️ writer     | Gemini       | ✅ 完成     | 1m32s | 26.9k  |
| 3   | 🎨 designer   | Gemini-Image | 进行中... | -     | -      |
</pre>

路线图完成后我会发送所有文件并输出完整的成本统计!`
  },
  {
    type: 'agent',
    sender: '智能体集群',
    time: '2026年2月11日 12:20',
    content: `<strong>🎉 全部完成!</strong>

<h3>📊 智能体团队执行统计</h3>

<strong>执行明细</strong>
<table>
<tr><th>阶段</th><th>智能体</th><th>任务</th><th>模型</th><th>耗时</th><th>Tokens (in/out)</th><th>状态</th></tr>
<tr><td>1-1</td><td>🔍 researcher</td><td>Arxiv调研</td><td>GLM</td><td>3m7s</td><td>~30k/1k</td><td>✅</td></tr>
<tr><td>1-2</td><td>🔍 researcher</td><td>GitHub调研</td><td>GLM</td><td>2m17s</td><td>29.6k/678</td><td>✅</td></tr>
<tr><td>1-3</td><td>🔍 researcher</td><td>中文调研</td><td>GLM</td><td>2m20s</td><td>20.1k/801</td><td>✅</td></tr>
<tr><td>2</td><td>✍️ writer</td><td>撰写报告</td><td>Gemini</td><td>1m32s</td><td>26.9k/397</td><td>✅</td></tr>
<tr><td>3</td><td>🎨 designer</td><td>路线图</td><td>-</td><td>-</td><td>(主智能体补充)</td><td>✅</td></tr>
</table>

<strong>成本汇总</strong>
<pre>
| 项目              | 数值                           |
| --------------- | ---------------------------- |
| 总耗时             | 9m16s(串行累计)                  |
| 实际等待            | ~5m(并行优化后)                   |
| 总 Tokens       | ~107k input / ~2.9k output   |
</pre>

<strong>成本对比分析</strong>
<pre>
| 方案                                  | Input Cost | Output Cost | 总计       |
| ----------------------------------- | ---------- | ----------- | -------- |
| 全用 Claude Opus ($5/$25/M)         | $0.535     | $0.073      | $0.61    |
| 智能体分工(实际)                          |            |             |          |
| - 3× researcher (GLM $0.014/M)     | $0.0011    | $0.00003    | $0.001   |
| - 1× writer (Gemini $1.25/$10/M)   | $0.034     | $0.004      | $0.038   |
| 实际总成本                               |            |             | $0.04    |
</pre>

<strong>效率分析</strong>
<ul>
<li><strong>串行执行预估</strong>: ~12分钟</li>
<li><strong>并行执行实际</strong>: ~5分钟</li>
<li><strong>节省时间</strong>: 7分钟 (58%)</li>
<li><strong>成本节省</strong>: $0.57 (93%)</li>
</ul>

<strong>交付成果:</strong>
<ul>
<li>✅ rl-final-report.md - 完整分析报告</li>
<li>✅ rl-roadmap-final.html - 可视化路线图</li>
<li>✅ rl-report-github.md - GitHub调研</li>
<li>✅ rl-report-feishu.md - 中文调研</li>
</ul>`
  }
];

// 初始化聊天消息
function initChat() {
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.innerHTML = '';

  chatData.forEach((msg, index) => {
    setTimeout(() => {
      const messageEl = createMessageElement(msg);
      chatMessages.appendChild(messageEl);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, index * 200);
  });
}

// 创建消息元素
function createMessageElement(msg) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${msg.type}`;

  const avatar = msg.type === 'user' ? '👤' : '🤖';

  messageDiv.innerHTML = `
    <div class="message-header">
      <div class="message-avatar">${avatar}</div>
      <div class="message-sender">${msg.sender}</div>
      <div class="message-time">${msg.time}</div>
    </div>
    <div class="message-content">${msg.content}</div>
  `;

  return messageDiv;
}

// 切换蜂群区域
function toggleSwarm() {
  const swarmSection = document.getElementById('swarmSection');
  swarmSection.classList.toggle('collapsed');
}

// 切换Tab
let currentTab = 'roadmap';

function showTab(tabName) {
  // 更新按钮状态
  const buttons = document.querySelectorAll('.control-btn:not(:last-child)');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    if (btn.textContent.includes(tabName === 'roadmap' ? '路线图' : '分析报告')) {
      btn.classList.add('active');
    }
  });

  // 更新内容显示
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.id === tabName) {
      tab.classList.add('active');
    }
  });

  currentTab = tabName;

  // 如果切换到报告,加载报告内容
  if (tabName === 'report' && !document.getElementById('reportContent').innerHTML) {
    loadReport();
  }
}

// 加载报告内容(简化版)
function loadReport() {
  const reportContent = document.getElementById('reportContent');
  reportContent.innerHTML = `
    <h1>智能体强化学习技术分析报告</h1>
    <p><strong>报告日期:</strong> 2026年2月11日</p>
    <p><strong>关键词:</strong> 强化学习, Agent, LLM, RLHF, World Models, DeepSeek-R1, o1</p>

    <h2>摘要</h2>
    <p>本报告旨在为技术管理者提供关于智能体强化学习(Agent RL)技术的全面分析。随着大语言模型(LLM)的爆发,强化学习(RL)已从传统的游戏控制领域跨越至通用智能体构建的核心舞台。报告首先回顾了从1989年Q-learning提出至2025年推理增强RL(Reasoning RL)的36年发展历程,清晰勾勒出技术演进的脉络。</p>

    <h2>一、强化学习发展历程(1989-2025)</h2>
    <p>强化学习的发展史是一部从"试错学习"到"智能决策"的进化史。我们可以将其划分为四个关键阶段:</p>

    <h3>1.1 基础理论奠基期(1989-2012)</h3>
    <p>这一时期确立了RL的数学基础。1989年Watkins提出的<strong>Q-learning</strong>为无模型(Model-free)RL奠定了基石,证明了智能体可以在不了解环境动态的情况下学习最优策略。</p>

    <h3>1.2 深度强化学习爆发期(2013-2016)</h3>
    <p>2013年,DeepMind的<strong>DQN(Deep Q-Network)</strong>横空出世,首次将深度神经网络与Q-learning结合,在Atari游戏中展现了超越人类的表现,标志着深度强化学习(Deep RL)时代的到来。</p>

    <h3>1.3 算法成熟与分化期(2017-2022)</h3>
    <p>这一阶段,算法向着"更稳定、更高效、更通用"演进:</p>
    <ul>
      <li><strong>PPO(2017):</strong> OpenAI提出的近端策略优化算法,成为了RL领域的"瑞士军刀",后来更是成为ChatGPT训练的核心基石。</li>
      <li><strong>SAC(2018):</strong> 引入最大熵框架,显著提升了智能体在复杂环境中的探索能力和鲁棒性。</li>
      <li><strong>MuZero(2020):</strong> 不再依赖规则,而是通过学习环境模型来进行规划。</li>
    </ul>

    <h3>1.4 大模型与推理RL新纪元(2023-2025)</h3>
    <p>随着ChatGPT的发布,RL找到了新的主战场——<strong>LLM对齐</strong>:</p>
    <ul>
      <li><strong>RLHF(2023):</strong> 成为让LLM遵循人类指令的标准范式。</li>
      <li><strong>DPO(2023):</strong> 斯坦福团队提出的直接偏好优化,跳过奖励模型训练,简化了对齐流程。</li>
      <li><strong>推理RL(2024-2025):</strong> 以<strong>OpenAI o1</strong>和<strong>DeepSeek-R1</strong>为代表,RL不再仅用于对齐,而是被用于激发模型的深度推理能力。</li>
    </ul>

    <h2>二、核心算法演进</h2>
    <p>理解核心算法的演进逻辑,有助于把握技术选型的关键:</p>

    <h3>2.1 DQN: 价值学习的里程碑</h3>
    <p>DQN的核心贡献在于解决了RL在处理高维感知输入(如图像)时的不稳定性。它引入了<strong>经验回放(Experience Replay)</strong>打破数据相关性,以及<strong>目标网络(Target Network)</strong>稳定训练目标。</p>

    <h3>2.2 PPO: 策略优化的工业标准</h3>
    <p>PPO通过引入<strong>裁剪(Clip)机制</strong>,限制了每次策略更新的幅度,防止模型因更新过大而崩溃。这种"保守但稳健"的策略使其对超参数不敏感,极易落地。</p>

    <h3>2.3 SAC: 最大熵探索的巅峰</h3>
    <p>Soft Actor-Critic (SAC) 在最大化累积奖励的同时,还最大化策略的<strong>熵(Entropy)</strong>。这意味着智能体在完成任务的同时,会尽可能保持动作的随机性。</p>

    <h3>2.4 DPO: 大模型时代的极简主义</h3>
    <p>传统的RLHF需要训练一个奖励模型(Reward Model),然后用PPO优化策略,流程复杂且不稳定。<strong>DPO(Direct Preference Optimization)</strong>从数学上证明了可以直接通过优化策略来满足人类偏好,无需显式的奖励模型。</p>

    <h2>三、前沿方向</h2>

    <h3>3.1 RLHF与RLAIF</h3>
    <p>从人类反馈到AI反馈,实现了反馈的自动化。</p>

    <h3>3.2 世界模型: DreamerV3的通用性</h3>
    <p>世界模型的核心思想是:智能体应该在脑海中构建一个环境模型,并在"梦境"中进行规划和训练。DreamerV3证明了RL算法可以像LLM一样具有通用性,无需为每个任务调参。</p>

    <h3>3.3 推理RL: 2025年的焦点</h3>
    <p>这是当前最激动人心的方向。<strong>OpenAI o1</strong>通过大规模RL训练,让模型学会了在回答前进行长时间的"隐式思维链"推理。<strong>DeepSeek-R1</strong>证明了<strong>纯强化学习(Pure RL)</strong>就能激发LLM涌现出自我反思和验证的能力。</p>

    <h2>四、开源生态与产业现状</h2>

    <h3>4.1 核心框架</h3>
    <ul>
      <li><strong>Stable-Baselines3:</strong> 最成熟的RL库,提供DQN/PPO/SAC等实现</li>
      <li><strong>RLlib (Ray):</strong> 分布式RL框架,适合大规模训练</li>
      <li><strong>Hugging Face TRL:</strong> 专注于LLM的RL微调</li>
    </ul>

    <h3>4.2 国内实践</h3>
    <ul>
      <li><strong>阿里 ROLL:</strong> 大规模离线RL平台</li>
      <li><strong>字节 verl:</strong> 高效的LLM RLHF训练框架</li>
      <li><strong>中科大 Agent-R1:</strong> 开源的推理RL实现</li>
    </ul>

    <h2>五、未来展望</h2>
    <p>基于当前技术趋势,我们对2026年及未来的技术走向进行展望:</p>
    <ul>
      <li>推理RL将成为提升LLM能力的标配</li>
      <li>世界模型与RL的结合将推动具身智能发展</li>
      <li>安全对齐将是下一阶段的竞争高地</li>
      <li>多智能体协作将从理论走向实用</li>
    </ul>

    <p style="text-align: center; margin-top: 3rem; color: var(--text-secondary);">
      <strong>--- 报告完 ---</strong><br>
      查看完整版请参考原始文档
    </p>
  `;
}

// 在新标签打开当前内容
function openInNewTab() {
  if (currentTab === 'roadmap') {
    window.open('../RL_survey/rl-roadmap-final.html', '_blank');
  } else {
    window.open('../RL_survey/rl-final-report.md', '_blank');
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  initChat();
});
