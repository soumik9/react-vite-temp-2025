import { LayoutHelper } from '@src/components';
import { AdminPathEnum, DashboardPathEnum } from '@src/libs/enum';

const AdminPage = () => {
    return (
        <LayoutHelper links={[DashboardPathEnum, AdminPathEnum]}>

        </LayoutHelper>
    );
};

export default AdminPage;