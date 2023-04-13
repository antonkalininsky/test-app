export function debounce<F extends Function>(foo: F, ms: number): F {
    let timeout: number;
    return <any>function (this: any, ...args: any[]): any {
        clearTimeout(timeout);
        timeout = window.setTimeout(() => foo.apply(this, args), ms);
    };
}