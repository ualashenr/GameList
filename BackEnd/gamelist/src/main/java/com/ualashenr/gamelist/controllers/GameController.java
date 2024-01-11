package com.ualashenr.gamelist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ualashenr.gamelist.dto.GameDTO;
import com.ualashenr.gamelist.dto.GameMinDTO;
import com.ualashenr.gamelist.services.GameService;

@RestController
@RequestMapping("/games")
public class GameController {

	@Autowired
	private GameService gameService;
	
	@GetMapping()
	public ResponseEntity<List<GameMinDTO>> findAll(){
		return ResponseEntity.ok(gameService.findAll());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<GameDTO> findById(@PathVariable Long id) {
		return ResponseEntity.ok(gameService.findById(id));
	}
}
