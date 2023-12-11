// 开发环境配置
export let baseUrl;
export let version;
if (process.env.NODE_ENV === 'development') {
	// baseUrl = 测试;
} else {
	// baseUrl = 正式;
}
//版本号
version = 1.0 .1;

// 接口前缀
export const apiPath = import.meta.env.SHOPRO_API_PATH;

//OSS文件地址
export const staticUrl = import.meta.env.SHOPRO_STATIC_URL;

export default {
	baseUrl,
	apiPath,
	staticUrl,
};