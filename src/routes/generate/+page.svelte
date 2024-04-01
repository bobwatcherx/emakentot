<script>
	export let data
</script>
<h5 style="text-align: center;font-weight: bold">generate Link</h5>

<div class="container">
	<a href="/" class="btn waves pink">kembali</a>
	<ul>
		{#each data.result.files as d}
		<li style="font-weight: bold">{d.title}</li>
		<li><a href={"https://emakentot.netlify.app/player/" + d.file_code}
             target="_blank" 
			>
			{"https://emakentot.netlify.app/player/" + d.file_code}
		</a></li>
		<br>
	    {/each}
	</ul>
</div>