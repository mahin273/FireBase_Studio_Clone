import { createProjectService, getProjectTreeService } from "../service/projectService.js"

export const createProjectController = async(req,res)=>{
  console.log("Controller Started");
	const projectId = await createProjectService();
  console.log("Controller Ended");
  return res.json({message:'Project created',data: projectId})

}

export const getProjectTreeController = async(req,res)=>{
	const tree = await getProjectTreeService(req.params.projectId);
	return res.status(200).json({
		data:tree,
		success:true,
		message:'Project tree fetched successfully'
	})

}
