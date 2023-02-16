// @see: http://eslint.cn

module.exports = {
	root: true,
	env: {
		browser: true,
		node: true,
		es6: true
	},
	parserOptions: {
		sourceType: 'module'
	},
	/* 继承某些已有的规则 */
	extends: ['prettier', 'plugin:prettier/recommended'],
	/*
	 * "off" 或 0    ==>  关闭规则
	 * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
	 * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
	 */
	rules: {
		// eslint (http://eslint.cn/docs/rules)
		'no-var': 'error', // 要求使用 let 或 const 而不是 var
		'no-multiple-empty-lines': ['error', { max: 1 }], // 不允许多个空行
		'no-use-before-define': 'off', // 禁止在 函数/类/变量 定义之前使用它们
		'prefer-const': 'off', // 此规则旨在标记使用 let 关键字声明但在初始分配后从未重新分配的变量，要求使用 const
		'no-irregular-whitespace': 'off' // 禁止不规则的空白
	}
};
