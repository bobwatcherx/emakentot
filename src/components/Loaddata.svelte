<script>
	export let data;
	import {formatDate,simpanbokep} from '../lib'
	
	
</script>

<style>
  .row .col {
    margin: 0px;
    padding: 0px;
  }
  .titletext{
  	font-weight: bold;
  	color: #d10289
  }
</style>

<div class=" mt-4">
	<div class="row">
		{#each data.result.files as file}
			<div class="col s6 m3 l3">
				<div class="card z-depth-2 waves waves-effect">
					<img src={file.thumbnail} class="card-img-top" alt="Thumbnail"
					style="width: 100%" 
					>
					<div class="container">
						{#if file.title.length > 30}
						   <h6 class="titletext">{file.title.slice(0, 30) + '...'}</h6>
						{:else}
						  <p class="titletext">{file.title}</p>
						{/if}
						<p style="font-weight: bold"> {formatDate(file.uploaded)}</p>
						<div style="display: flex;justify-content: space-between;">
							<button class="btn waves waves-effect blue"
							on:click={()=>simpanbokep(file)}
							>Simpan</button>
							<a href={"/player/" + file.file_code} class="btn waves waves-effect pink">Nonton</a>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
