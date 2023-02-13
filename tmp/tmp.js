Process exited with code 1
C:\Program Files\nodejs\node.exe --nolazy -r ts-node/register C:\Users\vpsin\OneDrive\Desktop\Projects\Test\nestjs/src/main.ts
POST / 201 25 - PostmanRuntime/7.29.2 ::1
ServerResponse {_events: {…}, _eventsCount: 1, _maxListeners: undefined, outputData: Array(0), outputSize: 0, …}
_closed: true
_contentLength: 25
_defaultKeepAlive: true
_events: {finish: Array(2)}
_eventsCount: 1
_expect_continue: false
_hasBody: true
_header: 'HTTP/1.1 201 Created\r\nX-Powered-By: Express\r\nContent-Type: application/json; charset=utf-8\r\nContent-Length: 25\r\nETag: W/"19-oPXdmlrZApxuxLN90/k8ddBzOHY"\r\nDate: Mon, 13 Feb 2023 19:11:13 GMT\r\nConnection: keep-alive\r\nKeep-Alive: timeout=5\r\n\r\n'
_headerNames: ƒ deprecated(...args) {\r\n    if (!warned) {\r\n      warned = true;\r\n      if (code !== undefined) {\r\n        if (!codesWarned.has(code)) {\r\n          process.emitWarning(msg, 'DeprecationWarning', code, deprecated);\r\n          codesWarned.add(code);\r\n        }\r\n      } else {\r\n        process.emitWarning(msg, 'DeprecationWarning', deprecated);\r\n      }\r\n    }\r\n    if (new.target) {\r\n      return ReflectConstruct(fn, args, new.target);\r\n    }\r\n    return ReflectApply(fn, this, args);\r\n  }
_headers: ƒ deprecated(...args) {\r\n    if (!warned) {\r\n      warned = true;\r\n      if (code !== undefined) {\r\n        if (!codesWarned.has(code)) {\r\n          process.emitWarning(msg, 'DeprecationWarning', code, deprecated);\r\n          codesWarned.add(code);\r\n        }\r\n      } else {\r\n        process.emitWarning(msg, 'DeprecationWarning', deprecated);\r\n      }\r\n    }\r\n    if (new.target) {\r\n      return ReflectConstruct(fn, args, new.target);\r\n    }\r\n    return ReflectApply(fn, this, args);\r\n  }
_headerSent: true
_keepAliveTimeout: 5000
_last: false
_maxListeners: undefined
_onPendingData: ƒ ()
_removedConnection: false
_removedContLen: false
_removedTE: false
_sent100: false
_trailer: ''
chunkedEncoding: false
connection: ƒ () {\r\n    return this.socket;\r\n  }
destroyed: true
finished: true
headersSent: ƒ () { return !!this._header; }
locals: {}
maxRequestsOnConnectionReached: false
outputData: (0) []
outputSize: 0
req: IncomingMessage {_readableState: ReadableState, _events: {…}, _eventsCount: 1, _maxListeners: undefined, socket: Socket, …}
sendDate: true
shouldKeepAlive: true
socket: null
statusCode: 201
statusMessage: 'Created'
Symbol(corked): 0
Symbol(kCapture): false
Symbol(kNeedDrain): false
Symbol(kOutHeaders): {x-powered-by: Array(2), content-type: Array(2), content-length: Array(2), etag: Array(2)}
useChunkedEncodingByDefault: true
writable: true
writableCorked: ƒ get() {\r\n    const corked = this.socket ? this.socket.writableCorked : 0;\r\n    return corked + this[kCorked];\r\n  }
writableEnded: ƒ () { return this.finished; }
writableFinished: ƒ get() {\r\n    return (\r\n      this.finished &&\r\n      this.outputSize === 0 &&\r\n      (!this.socket || this.socket.writableLength === 0)\r\n    );\r\n  }
writableHighWaterMark: ƒ get() {\r\n    return this.socket ? this.socket.writableHighWaterMark : HIGH_WATER_MARK;\r\n  }
writableLength: ƒ get() {\r\n    return this.outputSize + (this.socket ? this.socket.writableLength : 0);\r\n  }
writableNeedDrain: ƒ () {\r\n    return !this.destroyed && !this.finished && this[kNeedDrain];\r\n  }
writableObjectMode: ƒ get() {\r\n    return false;\r\n  }
domain: null
[[Prototype]]: ServerResponse
