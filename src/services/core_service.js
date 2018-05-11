import userContract from './userContract_service'

class CoreService {
    static instance

    signUp(FormValues){
        return new Promise((resolve, reject) => {

            return  userContract.signup(FormValues)
                .then((transactionReceipt) => {
                    // Success!

                    console.log(`Submitted to ETH blockchain with transactionReceipt.tx: ${transactionReceipt.tx}`)
                    resolve(transactionReceipt.tx)
                })
                .catch((error) => {
                    reject(`Failure: ${error}`)
                });
        });

    }
}

const coreService = new CoreService();

export default coreService