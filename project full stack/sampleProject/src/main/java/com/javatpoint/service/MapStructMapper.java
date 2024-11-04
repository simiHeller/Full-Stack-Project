package com.javatpoint.service;

import com.javatpoint.dto.DressDTO;
import com.javatpoint.model.Dress;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MapStructMapper {
    @Mapping(source = "category.id",target = "categoryId")
    public DressDTO DressToDto(Dress d);
    @Mapping(source = "categoryId",target = "category.id")
    public Dress DtoToDress(DressDTO d);

    public List<DressDTO> dressesToDtos(List<Dress> list);


}
