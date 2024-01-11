package com.ualashenr.gamelist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.ualashenr.gamelist.dto.GameListDTO;
import com.ualashenr.gamelist.model.GameList;
import com.ualashenr.gamelist.projections.GameMinProjection;
import com.ualashenr.gamelist.repositories.GameListRepository;
import com.ualashenr.gamelist.repositories.GameRepository;

@Service
public class GameListService {
	
	@Autowired
	private GameListRepository gameListRepository;
	
	@Autowired
	private GameRepository gameRepository;
	
	@Transactional(readOnly = true)
	public List<GameListDTO> findAll(){
		return gameListRepository.findAll().stream().map(GameListDTO::new).toList();
	}
	
	@Transactional(readOnly = true)
	public GameListDTO findById(Long listId){
		GameList entity = gameListRepository.findById(listId).get();
		return new GameListDTO(entity);
	}
	
	@Transactional
	public void move(Long listId, int sourceIndex, int destinationIndex) {

		List<GameMinProjection> list = gameRepository.searchByList(listId);

		GameMinProjection obj = list.remove(sourceIndex);
		list.add(destinationIndex, obj);

		int min = sourceIndex < destinationIndex ? sourceIndex : destinationIndex;
		int max = sourceIndex < destinationIndex ? destinationIndex : sourceIndex;

		for (int i = min; i <= max; i++) {
			gameListRepository.updateBelongingPosition(listId, list.get(i).getId(), i);
		}
	}

}
