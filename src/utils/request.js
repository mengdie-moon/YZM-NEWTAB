/**
 * @param {string} url 接口地址
 * @param {object} options fetch配置
 * @returns Promise
 */
export function http(url, options = {}) {
    const baseOpt = {
        method: 'GET',
        timeout: 8000
    }
    const opt = { ...baseOpt, ...options }
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('请求超时')), opt.timeout)
    })
    const fetchPromise = fetch(url, opt)
        .then(res => {
            if (!res.ok) throw new Error(`状态码${res.status}`)
            return res.json()
        })
    return Promise.race([fetchPromise, timeoutPromise])
}

// GET
export function get(url, params) {
    if (params) {
        const sp = new URLSearchParams(params)
        url += '?' + sp.toString()
    }
    return http(url, { method: 'GET' })
}

// POST
export function post(url, data) {
    return http(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}