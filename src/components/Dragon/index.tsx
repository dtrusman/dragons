import React from 'react';
import { AiOutlineEye } from 'react-icons/ai';
import { MdRemoveCircleOutline } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';

import {
  Card,
  Image,
  TextWrapper,
  Title,
  ActionsWrapper,
  Icon,
} from './styles';

interface DragonProps {
  dragon: DragonItem;
  onDetail?: (event: React.MouseEvent) => void;
  onDelete?: (event: React.MouseEvent) => void;
  onEdit?: (event: React.MouseEvent) => void;
}

export const Dragon: React.FC<DragonProps> = ({
  dragon,
  onDetail,
  onDelete,
  onEdit,
}: DragonProps) => {
  return (
    <Card>
      <Image src={dragon.imageUrl} alt={dragon.name} />
      <TextWrapper>
        <Title>{dragon.name}</Title>
        <ActionsWrapper>
          <Icon data-tooltip="Veja mais" onClick={onDetail}>
            <AiOutlineEye size={25} />
          </Icon>
          <Icon data-tooltip="Remover" onClick={onDelete}>
            <MdRemoveCircleOutline size={25} />
          </Icon>
          <Icon data-tooltip="Editar" onClick={onEdit}>
            <FaEdit size={25} />
          </Icon>
        </ActionsWrapper>
      </TextWrapper>
    </Card>
  );
};
