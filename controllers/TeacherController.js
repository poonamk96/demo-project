const router = Router()
router.get("/", (req, res) => {
    TeacherModel.search(req.query, res.callback)
})
router.get("/:id", (req, res) => {
    TeacherModel.getById(req.params, res.callback)
})

router.post("/", (req, res) => {
    TeacherModel.saveData(req.body, res.callback)
})
router.put("/:id", (req, res) => {
    TeacherModel.updateById(req, res.callback)
    // res.send(`Update For Id ${req.params.id}`)
    //console.log(res.statusCode)
})

router.delete("/:id", (req, res) => {
    TeacherModel.deleteOne(req.params, res.callback)
})

router.get("/teacherBy/:page", (req, res) => {
    TeacherModel.pagination(req, res.callback)
})
export default router
