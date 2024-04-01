<script>
	export let data
	import {player_domain,shortlink_key} from '../../../base/config.js'
	import {formatDate} from '../../../lib'
	import Loaddata from '../../../components/Loaddata.svelte'
</script>

<div class="container">
	<a href="/" class="btn waves waves-effect pink">kembali</a>
	<a href="/tontonnanti" class="btn waves waves-effect blue">Bokep tersimpan</a>
</div>

<iframe src={player_domain + "/e/" + data.details.result[0].file_code_protected} 
	allowfullscreen="true"
	allowscrolling="no"
	width="100%"
	height="330px"
	style="margin-top: 10px" 
frameborder="0"></iframe>
<div class="container mt-2">
	<h6 style="font-weight: bold;color: #d10289">{data.details.result[0].file_title}</h6>
</div>

<div class="p-3 container" >
	<p>Terakhir di Download  :  {formatDate(data.details.result[0].file_last_download)}</p>
	<a href={"https://cuty.io/quick?token=" + shortlink_key + "&url=" +  player_domain + "/d/" + data.details.result[0].file_code}
	target="_blank"
	style="width: 100%" 
	 class="btn waves waves-effect pink">Download Bokep</a>

	 <p style="color:red;font-weight: bold">Lewatin Iklannya kalo Mau DOWNLOAD BOKEP</p>
</div>

<div class="container">
	<h5>Bokep Montok Lainnya</h5>
</div>
<Loaddata data={data.random}/>