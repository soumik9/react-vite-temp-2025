import Swal from 'sweetalert2';
import { errorNotify, successNotify } from './notify';

export const useDelete = () => {

    const sendDeleteRequest = async (id, deleteMutation) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then(async (result) => {
            if (result.isConfirmed) {
                // await deleteMutation(id)
                deleteMutation(id).unwrap()
                    .then(response => {
                        if (response.success) {
                            successNotify(response.message);
                        }
                    })
                    .catch(error => {
                        errorNotify(error?.data?.message);
                    });
            }
        })
    }

    return { sendDeleteRequest };
}