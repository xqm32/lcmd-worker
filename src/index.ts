import { Octokit } from 'octokit';

export interface Env {
	GITHUB_TOKEN: string;
}

export default {
	async scheduled(event: ScheduledEvent, env: Env, ctx: ExecutionContext): Promise<void> {
		const octokit = new Octokit({
			auth: env.GITHUB_TOKEN,
		});

		await octokit.request('POST /repos/{owner}/{repo}/actions/workflows/{workflow_id}/dispatches', {
			owner: 'xqm32',
			repo: 'LeetCode',
			workflow_id: 'main.yml',
			ref: 'main',
			headers: {
				'X-GitHub-Api-Version': '2022-11-28',
			},
		});
	},
};
