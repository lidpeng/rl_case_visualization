// 获取对话数据
function getChatData() {
  return t('chatData');
}

// 初始化聊天消息
function initChat() {
  const chatMessages = document.getElementById('chatMessages');
  chatMessages.innerHTML = '';

  const chatData = getChatData();
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
  console.log('showTab called with:', tabName);
  // 更新按钮状态
  const buttons = document.querySelectorAll('.control-btn:not(:last-child)');
  buttons.forEach(btn => {
    btn.classList.remove('active');
    const btnText = btn.textContent;
    if ((tabName === 'roadmap' && btnText.includes('路线图')) ||
        (tabName === 'roadmap' && btnText.includes('Roadmap')) ||
        (tabName === 'report' && btnText.includes('完整报告')) ||
        (tabName === 'report' && btnText.includes('Full Report')) ||
        (tabName === 'github' && btnText.includes('GitHub')) ||
        (tabName === 'feishu' && btnText.includes('中文调研'))) {
      btn.classList.add('active');
    }
  });

  // 更新内容显示
  const tabs = document.querySelectorAll('.tab-content');
  tabs.forEach(tab => {
    tab.classList.remove('active');
    if (tab.id === tabName) {
      tab.classList.add('active');
      console.log('Activated tab:', tabName);
    }
  });

  currentTab = tabName;

  // 加载对应的 Markdown 内容
  if (tabName === 'report' && !document.getElementById('reportContent').innerHTML) {
    console.log('Loading report content...');
    loadReportContent('reportContent');
  } else if (tabName === 'github' && !document.getElementById('githubContent').innerHTML) {
    console.log('Loading github content...');
    loadReportContent('githubContent');
  } else if (tabName === 'feishu' && !document.getElementById('feishuContent').innerHTML) {
    console.log('Loading feishu content...');
    loadReportContent('feishuContent');
  }
}

// Markdown 转 HTML 函数
function markdownToHtml(markdown) {
  // 先处理代码块，避免其他规则影响
  const codeBlocks = [];
  let html = markdown.replace(/```[\s\S]*?```/g, function(match) {
    const index = codeBlocks.length;
    codeBlocks.push('<pre><code>' + match.slice(3, -3).trim() + '</code></pre>');
    return `__CODE_BLOCK_${index}__`;
  });

  // 处理行内代码
  html = html.replace(/`([^`]+)`/g, '<code>$1</code>');

  // 处理标题
  html = html.replace(/^#### (.*$)/gim, '<h4>$1</h4>');
  html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
  html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
  html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');

  // 处理粗体
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // 处理链接
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>');

  // 处理分隔线
  html = html.replace(/^---$/gim, '<hr>');

  // 处理无序列表
  html = html.replace(/^[\*\-] (.*$)/gim, '<li>$1</li>');

  // 处理有序列表
  html = html.replace(/^\d+\.\s+(.*$)/gim, '<li>$1</li>');

  // 包裹连续的 li 为 ul
  html = html.replace(/(<li>.*?<\/li>\s*)+/gs, function(match) {
    return '<ul>' + match + '</ul>';
  });

  // 恢复代码块
  codeBlocks.forEach((block, index) => {
    html = html.replace(`__CODE_BLOCK_${index}__`, block);
  });

  // 处理段落
  const lines = html.split('\n');
  let result = [];
  let inBlock = false;

  for (let line of lines) {
    line = line.trim();
    if (!line) continue;

    if (line.match(/^<(h\d|hr|ul|pre|code|table)/)) {
      inBlock = true;
      result.push(line);
    } else if (line.match(/<\/(h\d|ul|pre|code|table)>$/)) {
      result.push(line);
      inBlock = false;
    } else if (inBlock) {
      result.push(line);
    } else {
      result.push('<p>' + line + '</p>');
    }
  }

  return result.join('\n');
}

// 加载报告内容
function loadReportContent(contentId) {
  console.log('loadReportContent called with:', contentId);
  const element = document.getElementById(contentId);
  if (!element) {
    console.error('Element not found:', contentId);
    return;
  }

  let content = '';

  if (contentId === 'reportContent') {
    // 完整报告内容 (节选主要部分)
    content = `
# 智能体强化学习技术分析报告

**报告日期**: 2026年2月11日
**报告类型**: 技术综述与趋势分析
**关键词**: 强化学习, Agent, LLM, RLHF, World Models, DeepSeek-R1, o1

---

## 摘要

本报告旨在为技术管理者提供关于智能体强化学习(Agent RL)技术的全面分析。随着大语言模型(LLM)的爆发,强化学习(RL)已从传统的游戏控制领域跨越至通用智能体构建的核心舞台。

---

## 一、强化学习发展历程(1989-2025)

强化学习的发展史是一部从"试错学习"到"智能决策"的进化史。我们可以将其划分为四个关键阶段:

### 1.1 基础理论奠基期(1989-2012)
这一时期确立了RL的数学基础。1989年Watkins提出的**Q-learning**为无模型(Model-free)RL奠定了基石,证明了智能体可以在不了解环境动态的情况下学习最优策略。

### 1.2 深度强化学习爆发期(2013-2016)
2013年,DeepMind的**DQN(Deep Q-Network)**横空出世,首次将深度神经网络与Q-learning结合,在Atari游戏中展现了超越人类的表现,标志着深度强化学习(Deep RL)时代的到来。

### 1.3 算法成熟与分化期(2017-2022)
这一阶段,算法向着"更稳定、更高效、更通用"演进:
- **PPO(2017)**: OpenAI提出的近端策略优化算法,成为了RL领域的"瑞士军刀"
- **SAC(2018)**: 引入最大熵框架,显著提升了智能体的探索能力
- **MuZero(2020)**: 通过学习环境模型来进行规划

### 1.4 大模型与推理RL新纪元(2023-2025)
随着ChatGPT的发布,RL找到了新的主战场——**LLM对齐**:
- **RLHF(2023)**: 成为让LLM遵循人类指令的标准范式
- **DPO(2023)**: 直接偏好优化,简化了对齐流程
- **推理RL(2024-2025)**: 以**OpenAI o1**和**DeepSeek-R1**为代表,激发模型的深度推理能力

---

## 二、核心算法演进

### 2.1 DQN: 价值学习的里程碑
DQN引入了**经验回放(Experience Replay)**和**目标网络(Target Network)**,解决了高维感知输入的不稳定性问题。

### 2.2 PPO: 策略优化的工业标准
PPO通过**裁剪(Clip)机制**,限制每次策略更新的幅度,防止训练崩溃,成为LLM RLHF的首选算法。

### 2.3 SAC: 最大熵探索
在最大化累积奖励的同时最大化策略的**熵(Entropy)**,极强的探索能力,适用于机器人控制等复杂任务。

### 2.4 DPO: 大模型时代的极简主义
直接通过优化策略来满足人类偏好,无需显式的奖励模型,成为2024-2025年开源LLM对齐的主流选择。

---

## 三、前沿方向

### 3.1 RLHF与RLAIF
从人类反馈到AI反馈,实现反馈的自动化。

### 3.2 世界模型: DreamerV3的通用性
**DreamerV3**证明了RL算法可以像LLM一样具有通用性,无需为每个任务调参。

### 3.3 多智能体强化学习(MARL)
从AlphaStar到LLM多角色协作,MARL变得至关重要。

### 3.4 推理RL: 2025年的焦点
**OpenAI o1**和**DeepSeek-R1**通过大规模RL训练,让模型学会深度推理,实现数学和代码能力的质的飞跃。

---

## 四、开源生态与工具链

### 核心训练框架
- **Gymnasium**: OpenAI Gym的官方继承者,RL环境的标准API
- **Stable-Baselines3**: 基于PyTorch的经典算法实现库
- **Ray/RLlib**: 工业级分布式RL框架

### LLM与RLHF工具
- **Hugging Face TRL**: 集成SFT、Reward Modeling、PPO和DPO的全栈库
- **OpenRLHF**: 支持70B+级别模型的全参数训练

---

## 五、国内发展现状

### 头部企业布局
- **字节跳动**: DeepSeek-R1、verl框架
- **阿里巴巴**: ROLL库、通义千问RLHF
- **腾讯**: 王者荣耀"绝悟"AI、机器人控制

### 学术与教育
清华、北大、中科大、复旦等高校在顶会上表现活跃,《蘑菇书EasyRL》等降低了中文开发者的入门门槛。

---

## 六、未来展望

- **推理时间扩展**: 从"预训练规模"转向"推理计算规模"
- **通用世界模型**: 结合视频生成模型和RL
- **离线强化学习**: 工业化落地的关键
- **统一Agent架构**: 端到端的神经网络融合

---

**报告撰写**: OpenClaw Writer Agent
`;
  } else if (contentId === 'githubContent') {
    // GitHub调研报告内容 (节选)
    content = `
# GitHub强化学习相关项目和框架调研报告

> 调研时间: 2026-02-11
> 数据来源: GitHub及社区文档

---

## 一、核心框架(Core Frameworks)

### 1.1 Gymnasium
- **GitHub仓库**: Farama-Foundation/Gymnasium
- **Star数**: ⭐ 11.2k
- **简介**: OpenAI Gym官方维护分支,单智能体强化学习环境API标准
- **核心特点**:
  - 标准API: 为RL环境提供统一的接口标准
  - 向后兼容: 兼容旧版Gym环境
  - 丰富环境: 包含经典控制、Atari游戏、MuJoCo等
- **适用场景**: RL算法研究、教育教学、环境测试基准

### 1.2 Stable-Baselines3 (SB3)
- **GitHub仓库**: DLR-RM/stable-baselines3
- **Star数**: ⭐ 12k
- **简介**: 基于PyTorch的可靠强化学习算法实现集合
- **核心特点**:
  - 生产级质量: 德国宇航中心(DLR)开发
  - 算法丰富: PPO、DQN、A2C、SAC、TD3、DDPG等
  - 文档完善: 详尽的文档和教程
  - 易于使用: 简洁的API,三行代码即可训练
- **适用场景**: 实际应用原型、算法对比、新手入门

### 1.3 RLlib
- **GitHub仓库**: ray-project/ray (RLlib部分)
- **Star数**: ⭐ 30k+ (Ray整体项目)
- **简介**: 行业级、高度可扩展的强化学习库
- **核心特点**:
  - 分布式训练: 基于Ray分布式框架
  - 生产就绪: 容错设计,支持fault tolerance
  - 多智能体: 原生支持多智能体RL
  - 业界应用: 被OpenAI、Amazon等公司使用
- **适用场景**: 大规模生产环境、多智能体系统

### 1.4 CleanRL
- **GitHub仓库**: vwxyzjn/cleanrl
- **Star数**: ⭐ 9k
- **简介**: 高质量单文件实现深度强化学习算法
- **核心特点**:
  - 单文件架构: 每个算法都在一个Python文件中
  - 研究友好: 代码与数学描述高度一致
  - 可读性强: 结构清晰,变量命名直观
- **适用场景**: 学术研究、算法理解、快速原型

---

## 二、LLM与RLHF专项工具

### 2.1 Hugging Face TRL (Transformer Reinforcement Learning)
- **GitHub仓库**: huggingface/trl
- **Star数**: ⭐ 15.2k
- **简介**: 专注于LLM的全栈强化学习训练库
- **支持功能**:
  - SFT (Supervised Fine-Tuning)
  - Reward Modeling
  - PPO训练
  - DPO (Direct Preference Optimization)
  - ORPO (Odds Ratio Preference Optimization)

### 2.2 OpenRLHF
- **GitHub仓库**: OpenRLHF/OpenRLHF
- **Star数**: ⭐ 3.9k
- **简介**: 高性能RLHF训练框架
- **核心特点**:
  - 支持70B+级别模型全参数训练
  - 基于Ray和vLLM构建
  - 解决PPO在大模型上的显存和调度瓶颈

---

## 三、Agent开发框架

### 3.1 LangChain
- **GitHub仓库**: langchain-ai/langchain
- **Star数**: ⭐ 100k+
- **简介**: 最流行的LLM应用开发框架
- **核心组件**: Chains、Agents、Tools

### 3.2 AutoGPT
- **GitHub仓库**: Significant-Gravitas/AutoGPT
- **Star数**: ⭐ 170k+
- **简介**: 全自动Agent系统
- **设计理念**: 目标导向的自主任务执行

---

## 四、学习资源

### 4.1 Spinning Up in Deep RL
- **来源**: OpenAI
- **内容**: 深度强化学习教育资源

### 4.2 Deep RL Course
- **来源**: Hugging Face
- **内容**: 从零开始的深度强化学习课程

### 4.3 Awesome Reinforcement Learning
- **类型**: 资源合集
- **包含**: 论文、代码、教程、框架等

---

**调研完成**: OpenClaw Researcher Agent
`;
  } else if (contentId === 'feishuContent') {
    // 中文调研报告内容 (节选)
    content = `
# 强化学习中文资料研究报告

**报告时间**: 2026年2月11日
**研究方法**: 网络检索 + 飞书文档调研
**关键词**: 强化学习、Reinforcement Learning、RLHF、智能体训练

---

## 一、核心文档与文章

### 1.1 强化学习基础教程类

- **蘑菇书EasyRL** (Datawhale)
  - 经典中文强化学习教程
  - 配套李宏毅老师视频课程

- **动手学强化学习** (伯禹学习平台)
  - 张伟楠老师强化学习网课
  - 包含实践代码

- **强化学习导论** (Qiwihui)
  - 《Reinforcement Learning: An Introduction》第二版中文翻译

- **Hugging Face强化学习课程中文版**
  - 官方课程中文翻译
  - 最新的深度强化学习内容

### 1.2 RLHF(人类反馈强化学习)专题

- **100_RLHF原理与实践** (腾讯云开发者)
  - 详细讲解RLHF原理、实现流程及2025最新进展

- **什么是人类反馈的强化学习(RLHF)** (IBM中文)
  - IBM官方技术文档,权威定义与解释

- **一文读懂「RLHF」** (CSDN)
  - 通俗易懂的概念解释
  - 浏览量达4.6万

- **第六章:强化学习与人类反馈**
  - 深入探讨PPO、DPO等主流算法实现细节

### 1.3 Agent RL(智能体强化学习)专题

- **Agentic RL实战:从入门到实战!** (知乎)
  - 实战导向,少废话多代码

- **【万字长文】AgentRL框架详解** (CSDN)
  - 多轮多任务智能体强化学习的系统介绍

- **100页Agentic RL综述** (搜狐)
  - 牛津、新国立等联合定义的权威综述

- **AgentGym-RL:复旦大学智能体框架**
  - 游戏环境中的智能体训练系统

### 1.4 国内企业实践案例

- **阿里巴巴开源AI技术:强化学习技术演进**
  - 从2015年开始到产业化的完整历程

- **突破大模型推理瓶颈:字节跳动verl实践**
  - 企业级强化学习框架案例

- **阿里团队发表ROLL:强化学习优化库**
  - 专为大规模学习设计

- **字节跳动AGILE框架**
  - 端到端LLM Agent优化

### 1.5 大模型RLHF训练实战

- **一文搞懂大模型训练** (Qwen3)
  - 从提示词到MoE、RLHF全流程

- **大语言模型 RLHF - ChatGLM代码逐行解读**
  - ChatGLM的实际实现分析

- **使用Huggingface创建RLHF训练流程**
  - 完整的Hugging Face实践指南

---

## 二、核心概念提取

### 2.1 强化学习核心组件

- **智能体(Agent)**: 执行动作并从环境中学习的实体
- **环境(Environment)**: 接收动作并返回状态和奖励
- **状态(State)**: 环境在某一时刻的表示
- **动作(Action)**: 智能体可以执行的行为
- **奖励(Reward)**: 环境对智能体动作的反馈信号
- **策略(Policy)**: 从状态到动作的映射函数

### 2.2 RLHF详解

**RLHF (Reinforcement Learning from Human Feedback)** 是一种机器学习技术,利用人类的直接反馈来训练"奖励模型",然后利用该模型通过强化学习来优化AI系统的性能。

**关键步骤**:
1. 监督微调(SFT): 让模型学会基本的对话能力
2. 奖励模型训练: 利用人类偏好数据训练奖励模型
3. 强化学习优化: 使用PPO等算法优化模型

### 2.3 主流算法对比

- **PPO**: 稳定性强,工业标准
- **DPO**: 简化流程,无需奖励模型
- **ORPO**: 单阶段对齐,效率更高

---

## 三、国内技术生态

### 3.1 头部企业

- **字节跳动**: DeepSeek-R1、verl框架
- **阿里巴巴**: ROLL库、通义千问
- **腾讯**: 绝悟AI、机器人控制
- **百度**: 文心一言RLHF实践

### 3.2 学术机构

- **清华大学**: 基础理论研究
- **北京大学**: 安全RL
- **中国科学技术大学**: Agent-R1
- **复旦大学**: AgentGym框架

### 3.3 教育资源

- **Datawhale**: 蘑菇书EasyRL
- **伯禹平台**: 动手学强化学习
- **B站**: 大量中文视频教程

---

## 四、技术趋势

### 4.1 从RLHF到RLAIF
利用AI模型自身来提供反馈,减少人工标注成本。

### 4.2 推理RL的兴起
o1和R1证明了RL在提升模型推理能力方面的巨大潜力。

### 4.3 多智能体协作
从单体Agent到多Agent协作系统的演进。

### 4.4 具身智能应用
RL在机器人控制、自动驾驶等领域的落地。

---

**调研完成**: OpenClaw Researcher Agent (中文方向)
`;
  }

  // 转换为HTML并显示
  console.log('Content length:', content.length);

  // 先测试直接显示纯文本
  if (content.length > 0) {
    element.innerHTML = '<pre style="white-space: pre-wrap; color: white; padding: 20px;">' + content.substring(0, 500) + '...</pre>';
    console.log('Displayed first 500 chars as plain text');
  } else {
    console.error('Content is empty!');
  }

  // const html = markdownToHtml(content);
  // console.log('HTML length:', html.length);
  // element.innerHTML = html;
  // console.log('Content loaded successfully');
}

// 在新标签打开当前内容
function openInNewTab() {
  const lang = getCurrentLanguage();
  if (currentTab === 'roadmap') {
    window.open(`roadmap${lang === 'en' ? '-en' : ''}.html`, '_blank');
  } else if (currentTab === 'report') {
    window.open('rl-final-report.md', '_blank');
  } else if (currentTab === 'github') {
    window.open('rl-report-github.md', '_blank');
  } else if (currentTab === 'feishu') {
    window.open('rl-report-feishu.md', '_blank');
  }
}

// 打开指定文件
function openFile(filePath) {
  window.open(filePath, '_blank');
}

// 更新页面文本
function updatePageText() {
  // 更新标题
  document.title = t('pageTitle');

  // 更新聊天标题和信息
  const chatTitle = document.querySelector('.chat-header h2');
  if (chatTitle) chatTitle.textContent = t('chatTitle');

  const chatInfo = document.querySelector('.chat-info');
  if (chatInfo) chatInfo.textContent = t('chatInfo');

  // 更新蜂群标题
  const swarmTitle = document.querySelector('.swarm-header h3');
  if (swarmTitle) swarmTitle.textContent = t('swarmTitle');

  // 更新预览标题
  const previewTitle = document.querySelector('.preview-header h3');
  if (previewTitle) previewTitle.textContent = t('previewTitle');

  // 更新按钮文本
  const buttons = document.querySelectorAll('.control-btn');
  if (buttons[0]) buttons[0].textContent = t('btnRoadmap');
  if (buttons[1]) buttons[1].textContent = t('btnReport');
  if (buttons[2]) buttons[2].textContent = t('btnNewTab');

  // 更新工作流阶段标题
  const stageTitles = document.querySelectorAll('.stage-title');
  if (stageTitles[0]) stageTitles[0].textContent = t('stageAnalysis');
  if (stageTitles[1]) stageTitles[1].textContent = t('stageDecompose');
  if (stageTitles[2]) stageTitles[2].textContent = t('stageResearch');
  if (stageTitles[3]) stageTitles[3].textContent = t('stageWriting');
  if (stageTitles[4]) stageTitles[4].textContent = t('stageAssembly');

  // 更新统计标题
  const statsTitles = document.querySelectorAll('.stats-summary h4');
  if (statsTitles[0]) statsTitles[0].textContent = t('statsTitle');
  if (statsTitles[1]) statsTitles[1].textContent = t('filesTitle');

  // 更新统计标签
  const statLabels = document.querySelectorAll('.stat-label');
  if (statLabels[0]) statLabels[0].textContent = t('statsTotalTime');
  if (statLabels[1]) statLabels[1].textContent = t('statsTotalWords');
  if (statLabels[2]) statLabels[2].textContent = t('statsOptimization');
  if (statLabels[3]) statLabels[3].textContent = t('statsAgents');

  // 更新智能体名称和任务
  const agentNames = document.querySelectorAll('.agent-name');
  const agentTasks = document.querySelectorAll('.agent-task');
  const agentStatus = document.querySelectorAll('.agent-status');

  // 阶段0: 主智能体
  if (agentNames[0]) agentNames[0].textContent = t('agentMain');
  if (agentTasks[0]) agentTasks[0].textContent = t('taskAnalyze');
  if (agentStatus[0]) agentStatus[0].textContent = t('statusCompleted');

  // 阶段0.5: 任务拆解
  if (agentNames[1]) agentNames[1].textContent = t('agentMain');
  if (agentTasks[1]) agentTasks[1].textContent = t('taskDecompose');
  if (agentStatus[1]) agentStatus[1].textContent = t('statusCompleted');

  // 阶段1: 并行调研
  if (agentNames[2]) agentNames[2].textContent = t('agentResearcher') + ' #1';
  if (agentTasks[2]) agentTasks[2].textContent = t('taskArxiv');
  if (agentStatus[2]) agentStatus[2].textContent = t('statusCompleted');

  if (agentNames[3]) agentNames[3].textContent = t('agentResearcher') + ' #2';
  if (agentTasks[3]) agentTasks[3].textContent = t('taskGithub');
  if (agentStatus[3]) agentStatus[3].textContent = t('statusCompleted');

  if (agentNames[4]) agentNames[4].textContent = t('agentResearcher') + ' #3';
  if (agentTasks[4]) agentTasks[4].textContent = t('taskIndustry');
  if (agentStatus[4]) agentStatus[4].textContent = t('statusCompleted');

  if (agentNames[5]) agentNames[5].textContent = t('agentResearcher') + ' #4';
  if (agentTasks[5]) agentTasks[5].textContent = t('taskTutorial');
  if (agentStatus[5]) agentStatus[5].textContent = t('statusCompleted');

  // 阶段2: 分章节撰写
  if (agentNames[6]) agentNames[6].textContent = t('agentWriter') + ' #1';
  if (agentTasks[6]) agentTasks[6].textContent = t('taskChapter00');
  if (agentStatus[6]) agentStatus[6].textContent = t('statusCompleted');

  if (agentNames[7]) agentNames[7].textContent = t('agentWriter') + ' #2';
  if (agentTasks[7]) agentTasks[7].textContent = t('taskChapter02');
  if (agentStatus[7]) agentStatus[7].textContent = t('statusCompleted');

  if (agentNames[8]) agentNames[8].textContent = t('agentWriter') + ' #3';
  if (agentTasks[8]) agentTasks[8].textContent = t('taskChapter03');
  if (agentStatus[8]) agentStatus[8].textContent = t('statusCompleted');

  if (agentNames[9]) agentNames[9].textContent = t('agentWriter') + ' #4';
  if (agentTasks[9]) agentTasks[9].textContent = t('taskChapter04');
  if (agentStatus[9]) agentStatus[9].textContent = t('statusCompleted');

  if (agentNames[10]) agentNames[10].textContent = t('agentWriter') + ' #5';
  if (agentTasks[10]) agentTasks[10].textContent = t('taskChapter06');
  if (agentStatus[10]) agentStatus[10].textContent = t('statusCompleted');

  // 阶段3: 脚本汇总
  if (agentNames[11]) agentNames[11].textContent = t('agentAssembly');
  if (agentTasks[11]) agentTasks[11].textContent = t('taskAssemble');
  if (agentStatus[11]) agentStatus[11].textContent = t('statusCompletedFast');

  // 重新加载聊天消息
  initChat();
}

// 切换语言
function switchLanguage(lang) {
  setLanguage(lang);
  updatePageText();

  // 更新语言切换按钮状态
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  document.querySelector(`.lang-btn[data-lang="${lang}"]`).classList.add('active');

  // 更新 roadmap iframe 的 src
  const roadmapFrame = document.getElementById('roadmapFrame');
  if (roadmapFrame) {
    roadmapFrame.src = `roadmap${lang === 'en' ? '-en' : ''}.html`;
  }
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  // 设置当前语言按钮状态
  const currentLang = getCurrentLanguage();
  document.querySelector(`.lang-btn[data-lang="${currentLang}"]`).classList.add('active');

  // 更新页面文本
  updatePageText();
});
