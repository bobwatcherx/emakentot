<script>
	export let data
	import Loaddata from '../components/Loaddata.svelte'
</script>

<div style="display: flex;justify-content: space-around;">
		<a href="/chat"
   class="btn waves waves-effect orange" 
	>Request Bokep</a>

	<a href="/tontonnanti"
   class="btn waves waves-effect blue" 
	>Bokep Tersimpan</a>
</div>
<div class="container">
	<h5>Bokep Montok terbaru</h5>
</div>
<Loaddata data={data}/>