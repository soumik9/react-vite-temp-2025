import ActionButton from '@/components/Layout/Dashboard/ActionButton'
import ActionLink from '@/components/Layout/Dashboard/ActionLink'
import { ENUM_ACTION_TITLE } from '@/utils/enum/enum'
import { EMPLOYEE_LINKS } from '@/utils/enum/link'
import useDelete from '@/utils/hooks/useDelete'
import React from 'react'

const EActionBtn = ({ _id, deleteEmployee }) => {

    // *delete request hook
    const { sendDeleteRequest } = useDelete();

    // *funtion to delete a user
    const handleDeleteEmployee = (employeeId) => {
        sendDeleteRequest(employeeId, deleteEmployee);
    }

    return (
        <div className='flex gap-[7px]'>
            <ActionLink
                href={`${EMPLOYEE_LINKS.VIEW_EMPLOYEE_SUB}/${_id}`}
                type={ENUM_ACTION_TITLE.VIEW}
            />

            <ActionLink
                href={`${EMPLOYEE_LINKS.UPDATE_EMPLOYEE_SUB}/${_id}`}
                type={ENUM_ACTION_TITLE.UPDATE}
            />

            <ActionButton
                itype={ENUM_ACTION_TITLE.DELETE}
                onClick={() => handleDeleteEmployee(_id)}
            />
        </div>
    )
}

export default EActionBtn