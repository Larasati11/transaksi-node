//inisialisasi library
const express = require("express")
const app = express()

//import fungsi authorization auth
const auth = require("./auth")

//import route user
const user = require("./route/user")
app.use("/", user)

//import route pegawai
const pegawai = require("./route/pegawai")
app.use("/pegawai", auth, pegawai)

//import route pegawai
const pelanggaran = require("./route/pelanggaran")
app.use("/pelanggaran", auth, pelanggaran)

const pelanggaran_siswa = require("./route/pelanggaran_siswa")
app.use("/pelanggaran_siswa", auth, pelanggaran_siswa)

const detail_pelanggaran_siswa = require("./route/detail_pelanggaran_siswa")
app.use("/detail_pelanggaran_siswa", auth, detail_pelanggaran_siswa)



const jurusan = require("./route/jurusan")
app.use("/jurusan", auth, jurusan)



//import route pegawai
const siswa = require("./route/siswa")
app.use("/siswa", auth, siswa)

//membuat web server dengan port 2000
app.listen(2910, () => {
    console.log("server run on port 2910")
})