package com.example.demo.service;

import java.util.Collections;
import java.util.EnumSet;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dto.ContactDTO;
import com.example.demo.dto.UserDTO;
//import com.example.demo.dto.UserGetDTO;
import com.example.demo.dto.mapper.ContactMapper;
import com.example.demo.dto.mapper.UserMapper;
import com.example.demo.entity.Contact;
import com.example.demo.entity.Section;
import com.example.demo.entity.User;
import com.example.demo.exception.DemoException;
import com.example.demo.repository.UserRepository;
import com.example.demo.utils.Constant;


@Service
public class UserServiceImpl extends AbstractDemoService implements IUserService {

	/**
	 * Especificación JPA para {@link User}.
	 */
	@Autowired
	private UserRepository userRepository;


//	@Override
//	@Transactional(readOnly = true)
//	public Boolean canLogin(String user) {
//		Optional<User> optUser = userRepository.findByLogin(user);
//		if (!optUser.isPresent()) {
//			throw new DemoException(Constant.USER_NOT_EXISTS.toString());
//		}
//		if (optUser.get().getSections().isEmpty()) {
//			throw new DemoException(Constant.NO_SECTIONS_ACCESS.toString());
//		}
//		if (Collections.disjoint(
//				optUser.get().getSections().stream().map(Section::getAlias).collect(Collectors.toList()),
//				EnumSet.allOf(SectionsEnum.class).stream().map(SectionsEnum::toString)
//						.collect(Collectors.toList()))) {
//			throw new DemoException(Constant.NO_SECTIONS_ACCESS.toString());
//		}
//		return true;
//	}
	
//	@Override
//	public List<UserGetDTO> findAll() {
//		
//		return (List<UserGetDTO>)userRepository.findAll();
//	}
	
	@Override
	@Transactional
	public UserDTO createUser(UserDTO userDtoRequest) {
		User user = UserMapper.INSTANCE.userDTOtoUser(userDtoRequest);
		User newUser = userRepository.save(user);
		return UserMapper.INSTANCE.userToUserDTO(newUser);
	}
	
	
	
	
	
	
	
}