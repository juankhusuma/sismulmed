export async function handle<T extends () => ReturnType<T>>(fn: T)
    : Promise<[ReturnType<T> | null, typeof Error | null]> {
    try {
        const data = await fn();
        return [data, null]
    } catch (err: any) {
        return [null, err]
    }
}