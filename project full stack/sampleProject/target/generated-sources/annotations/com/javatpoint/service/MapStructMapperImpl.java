package com.javatpoint.service;

import com.javatpoint.dto.DressDTO;
import com.javatpoint.model.Category;
import com.javatpoint.model.Dress;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-01-15T19:34:40+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 1.8.0_312 (Amazon.com Inc.)"
)
@Component
public class MapStructMapperImpl implements MapStructMapper {

    @Override
    public DressDTO DressToDto(Dress d) {
        if ( d == null ) {
            return null;
        }

        DressDTO dressDTO = new DressDTO();

        dressDTO.setCategoryId( dCategoryId( d ) );
        dressDTO.setImage( d.getImage() );
        dressDTO.setId( d.getId() );
        dressDTO.setTitle( d.getTitle() );
        dressDTO.setColor( d.getColor() );
        dressDTO.setFubricType( d.getFubricType() );
        dressDTO.setPrice( d.getPrice() );
        dressDTO.setRent( d.getRent() );

        return dressDTO;
    }

    @Override
    public Dress DtoToDress(DressDTO d) {
        if ( d == null ) {
            return null;
        }

        Dress dress = new Dress();

        dress.setCategory( dressDTOToCategory( d ) );
        dress.setImage( d.getImage() );
        dress.setId( d.getId() );
        dress.setTitle( d.getTitle() );
        dress.setColor( d.getColor() );
        dress.setFubricType( d.getFubricType() );
        dress.setPrice( d.getPrice() );
        dress.setRent( d.getRent() );

        return dress;
    }

    @Override
    public List<DressDTO> dressesToDtos(List<Dress> list) {
        if ( list == null ) {
            return null;
        }

        List<DressDTO> list1 = new ArrayList<DressDTO>( list.size() );
        for ( Dress dress : list ) {
            list1.add( DressToDto( dress ) );
        }

        return list1;
    }

    private Long dCategoryId(Dress dress) {
        if ( dress == null ) {
            return null;
        }
        Category category = dress.getCategory();
        if ( category == null ) {
            return null;
        }
        Long id = category.getId();
        if ( id == null ) {
            return null;
        }
        return id;
    }

    protected Category dressDTOToCategory(DressDTO dressDTO) {
        if ( dressDTO == null ) {
            return null;
        }

        Category category = new Category();

        category.setId( dressDTO.getCategoryId() );

        return category;
    }
}
