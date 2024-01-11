package com.ualashenr.gamelist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ualashenr.gamelist.dto.GameListDTO;
import com.ualashenr.gamelist.dto.GameMinDTO;
import com.ualashenr.gamelist.dto.ReplacementDTO;
import com.ualashenr.gamelist.services.GameListService;
import com.ualashenr.gamelist.services.GameService;

@RestController
@RequestMapping("/lists")
public class GameListController {

	@Autowired
	private GameListService gameListService;
	
	@Autowired
	private GameService gameService;
	
	@GetMapping()
	public ResponseEntity<List<GameListDTO>> findAll(){
		return ResponseEntity.ok(gameListService.findAll());
	}
	
	@GetMapping("/{listId}")
	public ResponseEntity<GameListDTO> findById(@PathVariable Long listId) {
		return ResponseEntity.ok(gameListService.findById(listId));
	}
	
	@GetMapping(value = "/{listId}/games")
	public List<GameMinDTO> findGames(@PathVariable Long listId) {
		List<GameMinDTO> result = gameService.findByGameList(listId);
		return result;
	}
	
	@PostMapping(value = "/{listId}/replacement")
	public void move(@PathVariable Long listId, @RequestBody ReplacementDTO body) {
		gameListService.move(listId, body.getSourceIndex(), body.getDestinationIndex());
	}
}
