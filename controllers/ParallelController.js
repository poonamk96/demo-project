const router = Router()
router.get("/", (req, res) => {
    ParallelModel.search(req.query, res.callback)
})

router.get("/:id", (req, res) => {
    ParallelModel.searchByWaterFall(req.params, res.callback)
})

router.get("/lodash/loadashopt", (req, res) => {
    ParallelModel.lodashOperations(req.query, res.callback)
})

router.get("/async/abc", (req, res) => {
    AsyncModel.async(req.params, res.callback)
})

export default router