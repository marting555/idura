import CrudModule from '@/modules/CrudModule/CrudModule';
import DynamicForm from '@/forms/DynamicForm';
import useLanguage from '@/locale/useLanguage';
import { fields } from './config';

export default function Rental() {
  const translate = useLanguage();
  const entity = 'equipmentrental';
  const searchConfig = {
    displayLabels: ['equipment.name'],
    searchFields: 'equipment.name',
  };
  const deleteModalLabels = ['equipment.name'];

  const Labels = {
    PANEL_TITLE: translate('equipment_rental'),
    DATATABLE_TITLE: translate('equipment_rental_list'),
    ADD_NEW_ENTITY: translate('add_new_equipment_rental'),
    ENTITY_NAME: translate('equipment_rental'),
  };

  const configPage = {
    entity,
    ...Labels,
  };
  const config = {
    ...configPage,
    fields,
    searchConfig,
    deleteModalLabels,
  };

  return (
    <CrudModule
      createForm={<DynamicForm fields={fields} />}
      updateForm={<DynamicForm fields={fields} isUpdateForm={true} />}
      config={config}
    />
  );
}
