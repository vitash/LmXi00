
interface WxPostData<Args extends any[] = any[]> {
    get_url_data<R>(...arg: Args): [url: string, r: R]
}

interface WxPost {
    url: string
    post(fn: <Args extends any[], R>(...arg: Args) => R): void
}
type WxApi<T extends Record<string, any[]> = {}> = {
    [K in keyof T]: (WxPost | WxPostData<T[K]> | string)
}
function buildWxApi<P,T extends { [k: string]: WxApi }>(apiObj: T) {
    Object.entries(apiObj).reduce((res, [name, api]) => {
        // res[api.name] = 
    }, {} as any)
}

const WxApi = buildWxApi({
    get_user: {
        url: "sdsd",
        post(_: () => number) { }
    },
    get_user2: {
        get_url_data(nu: number) {
            return ["sd"]
        }
    },

})



export { }