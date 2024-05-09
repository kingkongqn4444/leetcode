// class AsyncOperation {
//   constructor() {
//     this._completer = new Promise((resolve, reject) => {
//       this._resolveOperation = resolve;
//       this._rejectOperation = reject;
//     });
//   }

//   async doOperation() {
//     this._startOperation();
//     return this._completer;
//   }

//   _finishOperation(result) {
//     this._resolveOperation(result);
//   }

//   _errorHappened(error) {
//     this._rejectOperation(error);
//   }

//   _startOperation() {
//     setTimeout(() => {
//       this._finishOperation("data");
//     }, 2000);
//   }
// }

// // Example usage:
// const asyncOp = new AsyncOperation();
// asyncOp
//   .doOperation()
//   .then((result) => {
//     console.log(result); // 'data'
//   })
//   .catch((error) => {
//     console.error(error);
//   });

class AsyncOperation {
  constructor() {
    this._completer = new Promise((resolve, reject) => {
      this._resolveOperation = resolve;
      this._rejectOperation = reject;
    });
  }

  _future() {
    console.log("===================", "dang call");
    return "Đang call";
  }

  _finishOperation(data) {
    console.log("========================", "call data success");
    return data;
  }

  _errorHappened(error) {
    console.log("========================", "error");
    return error;
  }
}

const aaa = new AsyncOperation();

aaa._future();
