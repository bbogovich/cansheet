import Introspector from "./jsIntrospect";
const ErrorCodes = {
	PARSE_ERROR: { code: -32700, message: "Parse error	Invalid JSON was received by the server."},
	INVALID_REQUEST: { code: -32600, message: "The JSON sent is not a valid Request object."},
	METHOD_NOT_FOUND: { code: -32601, message: "The method does not exist / is not available."},
	INVALID_PARAMETERS:  { code: -32602, mesage: "Invalid method parameter(s)." },
	INTERNAL_ERROR: { code: -32603, message: "Internal JSON-RPC error." }
	//-32000 to -32099	Server error	"Reserved for implementation-defined server-errors."
};
enum JsonRpcVersion {
	"2.0"
}
type GlobalObject = {
	onmessage: Function,
	postMessage: Function
};
type JsonRpcRequest = {
	jsonrpc: JsonRpcVersion,
	method: string,
	params: object,
	id: number
}
export default class CanDriver {
	postMessage: Function;
	#renderContext: CanvasRenderingContext2D | null = null;
	columns: Array<Object>
	rows: Array<Object>
	data: Array<Array<string|number>>
	set renderContext(oContext: CanvasRenderingContext2D){

	}
	constructor(global: GlobalObject){
		global.onmessage = this.onmessage.bind(this);
		this.postMessage = global.postMessage();
		this.columns = [];
		this.rows = [];
		this.data = [];
	}
	async getAPI(): Promise<Array<string>> {
		const mFunctions = Introspector.getApi(this as object);
		return Array.from(mFunctions.keys()).filter((sKey: string)=>{
			return mFunctions.get(sKey) === "AsyncFunction";
		});
	};
	async setRenderingContext({ context }: { context: CanvasRenderingContext2D}){
		this.#renderContext = context;
	}
	async render(){

	}
	exec({ jsonrpc, method, params, id }){
		try {

		} catch(e){

		}
	}
	onmessage({ data: { jsonrpc, method, params, id } }){
		if (!this[method]){

		}
	}
}