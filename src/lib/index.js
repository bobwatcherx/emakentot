 import Swal from 'sweetalert2';


export function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
    }

export function simpanbokep(file) {
        try {
            const existingData = localStorage.getItem('nonton-nanti');
            const newData = existingData ? JSON.parse(existingData) : [];
            newData.push(file);
            localStorage.setItem('nonton-nanti', JSON.stringify(newData));

            // Menampilkan SweetAlert berhasil disimpan
            Swal.fire({
                icon: 'success',
                toast: true,
                text: 'Bokep berhasil disimpan',
                timer: 1000
            })
        } catch (error) {
            console.error('Error saving to localStorage:', error);

            // Menampilkan SweetAlert gagal disimpan
            Swal.fire({
                icon: 'error',
                title: 'Gagal!',
                text: error.message,
            });
        }
    }