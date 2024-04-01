<script>
    import { onMount } from 'svelte';
    import Swal from 'sweetalert2';

    let savedFiles = [];

    // Fungsi untuk mendapatkan data dari localStorage
    function getSavedFiles() {
        const storedData = localStorage.getItem('nonton-nanti');
        if (storedData) {
            savedFiles = JSON.parse(storedData);
            savedFiles.reverse(); // Membalik urutan data
        }
    }

    // Panggil fungsi saat komponen dimuat
    onMount(() => {
        getSavedFiles();
    });

    // Fungsi untuk menghapus file dari localStorage
    function removeFile(index) {
        savedFiles.splice(index, 1);
        localStorage.setItem('nonton-nanti', JSON.stringify(savedFiles));
        Swal.fire({
            icon: 'success',
            title: 'Berhasil!',
            text: 'File berhasil dihapus dari local storage',
        });
        getSavedFiles()
    }
</script>

<style>
    .card {
        margin-bottom: 20px;
    }
    .card img {
        width: 100%;
    }
    .row .col{
        margin:0px;
        padding: 0px
    }
</style>

<div class="container">
    <a href="/" class="btn waves waves-effect pink">Kembali</a>
</div>

<div >
    <div class="container">
    <h6 style="font-weight: bold">Bokep yang Disimpan</h6>
    </div>
    <div class="row">
        {#if savedFiles.length > 0}
            {#each savedFiles as file, index}
                <div class="col s6 m4 l3">
                    <div class="card z-depth-2">
                        <img src={file.thumbnail} alt="Thumbnail">
                        <div class="container">
                            <p>{file.title}</p>
                            
                        </div>
                        <div>
                            <button class="btn waves waves-effect pink" on:click={() => removeFile(index)}>Hapus</button>
                            <a class="btn waves waves-effect blue" href={`/player/${file.file_code}`}>Nonton</a>
                        </div>
                    </div>
                </div>
            {/each}
        {:else}
            <p>Tidak ada file yang disimpan.</p>
        {/if}
    </div>
</div>
