import util from 'util';
import child_process from 'child_process';
import fs from 'fs/promises'
import uuid4 from 'uuid4';


const exec = util.promisify(child_process.exec);
export const createProjectController = async(req,res)=>{
	
	const projectId = uuid4();
	await fs.mkdir(`./projects/${projectId}`)
	
	const response = await exec('npm create vite@latest codespace -- --template react',{
		cwd:`./projects/${projectId}`
	})
	
	
  
  return res.json({message:'Project created',data: projectId})
	
}