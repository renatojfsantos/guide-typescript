// const value: Direction = "right";
function moveToFn(direction) {
    switch (direction) {
        case 'left':
            console.log('Moving left');
            break;
        case 'right':
            console.log('Moving right');
            break;
        case 'top':
            console.log('Moving top');
            break;
        case 'bottom':
            console.log('Moving bottom');
            break;
        default:
            console.log("I don't know where to go");
    }
}
moveToFn('top');
// // type Method = 'GET' | 'POST';
// type Request = {
//   url: string,
//   method: 'GET' | 'POST',
// }
// // declare function handleRequest(url: string, method: 'GET' | 'POST'): void;
// declare function handleRequest(url: string, method: Request['method']): void;
// // declare function handleRequest( url: string, method: string): void;
// const request: Request = {
//   url: "https://example.com",
//   method: "GET"
// };
// request.method = 'POST';
// handleRequest(request.url, request.method);
