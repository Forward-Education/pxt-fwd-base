namespace fwdI2C {
    export const SRV_I2CSVC = 0x1c18ca43

    export const enum Status {
        OK = 0,
        NAckAddr = 1,
        NAckData = 2,
        NoI2C = 3,
    }

    export const enum FwdI2CTransactionCmd {
        Transaction = 0x80,
    }

    export namespace FwdI2CTransactionCmdPack {
        // unique command transaction @ 0x80
        // [address: u8][num_read: u8][write_buf: bytes...]
        export const Transaction = "u8 u8 b"
    }

    export namespace FwdI2CTransactionReportPack {
        // report
        // [status: Status(u8)][read_buf: bytes...]
        export const Report = "u8 b"
    }

    export const enum FwdI2CTransactionReg {
        // ro ok: bool @ 0x180
        Ok = 0x180,
    }

    export namespace FwdI2CTransactionRegPack {
        // [ok: bool]  (bool is encoded as u8: 0=false, nonzero=true)
        export const Ok = "u8"
    }
}
