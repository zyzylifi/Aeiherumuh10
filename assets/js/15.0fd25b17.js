(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{364:function(t,e,l){"use strict";l.r(e);var a=l(4),v=Object(a.a)({},(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[l("h2",{attrs:{id:"mysql-数据类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#mysql-数据类型"}},[t._v("#")]),t._v(" MySQL 数据类型")]),t._v(" "),l("p",[t._v("MySQL支持多种类型，大致可以分为三类：数值、日期/时间和字符串(字符)类型。")]),t._v(" "),l("hr"),t._v(" "),l("h3",{attrs:{id:"数值类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#数值类型"}},[t._v("#")]),t._v(" 数值类型")]),t._v(" "),l("p",[t._v("MySQL支持所有标准SQL数值数据类型。")]),t._v(" "),l("p",[t._v("这些类型包括严格数值数据类型(INTEGER、SMALLINT、DECIMAL和NUMERIC)，以及近似数值数据类型(FLOAT、REAL和DOUBLE PRECISION)。")]),t._v(" "),l("p",[t._v("关键字INT是INTEGER的同义词，关键字DEC是DECIMAL的同义词。")]),t._v(" "),l("p",[t._v("BIT数据类型保存位字段值，并且支持MyISAM、MEMORY、InnoDB和BDB表。")]),t._v(" "),l("p",[t._v("作为SQL标准的扩展，MySQL也支持整数类型TINYINT、MEDIUMINT和BIGINT。下面的表显示了需要的每个整数类型的存储和范围。")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("大小")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("范围（有符号）")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("范围（无符号）")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("用途")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("TINYINT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1 字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(-128，127)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(0，255)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("小整数值")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("SMALLINT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("2 字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(-32 768，32 767)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(0，65 535)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("大整数值")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MEDIUMINT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("3 字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(-8 388 608，8 388 607)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(0，16 777 215)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("大整数值")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("INT或INTEGER")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("4 字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(-2 147 483 648，2 147 483 647)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(0，4 294 967 295)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("大整数值")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("BIGINT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("8 字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(-9,223,372,036,854,775,808，9 223 372 036 854 775 807)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(0，18 446 744 073 709 551 615)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("极大整数值")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("FLOAT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("4 字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(-3.402 823 466 E+38，-1.175 494 351 E-38)，0，(1.175 494 351 E-38，3.402 823 466 351 E+38)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0，(1.175 494 351 E-38，3.402 823 466 E+38)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("单精度 浮点数值")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("DOUBLE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("8 字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("(-1.797 693 134 862 315 7 E+308，-2.225 073 858 507 201 4 E-308)，0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0，(2.225 073 858 507 201 4 E-308，1.797 693 134 862 315 7 E+308)")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("双精度 浮点数值")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("DECIMAL")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("对DECIMAL(M,D) ，如果M>D，为M+2否则为D+2")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("依赖于M和D的值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("依赖于M和D的值")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("小数值")])])])]),t._v(" "),l("hr"),t._v(" "),l("h3",{attrs:{id:"日期和时间类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#日期和时间类型"}},[t._v("#")]),t._v(" 日期和时间类型")]),t._v(" "),l("p",[t._v("表示时间值的日期和时间类型为DATETIME、DATE、TIMESTAMP、TIME和YEAR。")]),t._v(" "),l("p",[t._v('每个时间类型有一个有效值范围和一个"零"值，当指定不合法的MySQL不能表示的值时使用"零"值。')]),t._v(" "),l("p",[t._v("TIMESTAMP类型有专有的自动更新特性，将在后面描述。")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("大小 (字节)")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("范围")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("格式")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("用途")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("DATE")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1000-01-01/9999-12-31")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YYYY-MM-DD")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("日期值")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("TIME")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("3")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("'-838:59:59'/'838:59:59'")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("HH:MM:SS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("时间值或持续时间")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("YEAR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1901/2155")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YYYY")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("年份值")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("DATETIME")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("8")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1000-01-01 00:00:00/9999-12-31 23:59:59")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YYYY-MM-DD HH:MM:SS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("混合日期和时间值")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("TIMESTAMP")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("4")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("1970-01-01 00:00:00/2038结束时间是第 "),l("strong",[t._v("2147483647")]),t._v(" 秒，北京时间 "),l("strong",[t._v("2038-1-19 11:14:07")]),t._v("，格林尼治时间 2038年1月19日 凌晨 03:14:07")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("YYYYMMDD HHMMSS")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("混合日期和时间值，时间戳")])])])]),t._v(" "),l("hr"),t._v(" "),l("h3",{attrs:{id:"字符串类型"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#字符串类型"}},[t._v("#")]),t._v(" 字符串类型")]),t._v(" "),l("p",[t._v("字符串类型指CHAR、VARCHAR、BINARY、VARBINARY、BLOB、TEXT、ENUM和SET。该节描述了这些类型如何工作以及如何在查询中使用这些类型。")]),t._v(" "),l("table",[l("thead",[l("tr",[l("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("大小")]),t._v(" "),l("th",{staticStyle:{"text-align":"left"}},[t._v("用途")])])]),t._v(" "),l("tbody",[l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("CHAR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0-255字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("定长字符串")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("VARCHAR")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0-65535 字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("变长字符串")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("TINYBLOB")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0-255字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("不超过 255 个字符的二进制字符串")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("TINYTEXT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0-255字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("短文本字符串")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("BLOB")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0-65 535字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("二进制形式的长文本数据")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("TEXT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0-65 535字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("长文本数据")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MEDIUMBLOB")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0-16 777 215字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("二进制形式的中等长度文本数据")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("MEDIUMTEXT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0-16 777 215字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("中等长度文本数据")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("LONGBLOB")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0-4 294 967 295字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("二进制形式的极大文本数据")])]),t._v(" "),l("tr",[l("td",{staticStyle:{"text-align":"left"}},[t._v("LONGTEXT")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("0-4 294 967 295字节")]),t._v(" "),l("td",{staticStyle:{"text-align":"left"}},[t._v("极大文本数据")])])])])])}),[],!1,null,null,null);e.default=v.exports}}]);