import{_ as t,o as s,c as n,e as a}from"./app-ee48c5df.js";const e={},p=a(`<h1 id="通知消息" tabindex="-1"><a class="header-anchor" href="#通知消息" aria-hidden="true">#</a> 通知消息</h1><h2 id="未读消息数" tabindex="-1"><a class="header-anchor" href="#未读消息数" aria-hidden="true">#</a> 未读消息数</h2><blockquote><p>https://api.bilibili.com/x/msgfeed/unread</p></blockquote><p><em>请求方式：GET</em></p><p>认证方式：Cookie（SESSDATA）</p><p><strong>json回复：</strong></p><p>根对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>code</td><td>num</td><td>返回值</td><td>0：成功<br>-101：账号未登录</td></tr><tr><td>message</td><td>str</td><td>错误信息</td><td>默认为0</td></tr><tr><td>ttl</td><td>num</td><td>1</td><td></td></tr><tr><td>data</td><td>obj</td><td>信息本体</td><td></td></tr></tbody></table><p>data 对象：</p><table><thead><tr><th>字段</th><th>类型</th><th>内容</th><th>备注</th></tr></thead><tbody><tr><td>at</td><td>num</td><td>未读at数</td><td></td></tr><tr><td>chat</td><td>num</td><td>0</td><td>作用尚不明确</td></tr><tr><td>like</td><td>num</td><td>未读点赞数</td><td></td></tr><tr><td>reply</td><td>num</td><td>未读回复数</td><td></td></tr><tr><td>sys_msg</td><td>num</td><td>未读系统通知数</td><td></td></tr><tr><td>up</td><td>num</td><td>UP主助手信息数</td><td></td></tr></tbody></table><p><strong>示例：</strong></p><p>以下信息代表了未读点赞数为10，未读回复数为4，未读at消息数为3，未读系统通知数为2，UP主助手信息数为1</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token string">&#39;https://api.bilibili.com/x/msgfeed/unread&#39;</span> <span class="token punctuation">\\</span>
<span class="token parameter variable">-b</span> <span class="token string">&#39;SESSDATA=xxx&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><details><summary>查看响应示例：</summary><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;code&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
	<span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;0&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;ttl&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
	<span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;at&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
		<span class="token property">&quot;chat&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
		<span class="token property">&quot;like&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
		<span class="token property">&quot;reply&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
		<span class="token property">&quot;sys_msg&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
		<span class="token property">&quot;up&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>`,14),d=[p];function o(r,l){return s(),n("div",null,d)}const i=t(e,[["render",o],["__file","msg.html.vue"]]);export{i as default};
