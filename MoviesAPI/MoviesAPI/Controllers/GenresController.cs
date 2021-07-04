using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using MoviesAPI.DTOs;
using MoviesAPI.Entities;
using MoviesAPI.Filters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
    [Route("api/genres")]
    [ApiController]
    public class GenresController : ControllerBase
    {
        private readonly ILogger<GenresController> _logger;
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;

        public GenresController(ILogger<GenresController> _logger, ApplicationDbContext _context, IMapper _mapper)
        {
            this._logger = _logger;
            this._context = _context;
            this._mapper = _mapper;
        }

        [HttpGet] // api/genres
        public async Task<ActionResult<List<GenreDTO>>> Get()
        {
            _logger.LogInformation("Get all the genres");

            var genres = await _context.Genres.OrderBy(x => x.Name).ToListAsync();

            return _mapper.Map<List<GenreDTO>>(genres);
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<GenreDTO>> Get(int id)
        {
            var genre = await _context.Genres.FirstOrDefaultAsync(x => x.Id == id);

            if (genre == null) return NotFound();

            return _mapper.Map<GenreDTO>(genre);
        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GenreCreationDTO genreCreationDTO)
        {
            var genre = _mapper.Map<Genre>(genreCreationDTO);
            _context.Add(genre);
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> Put(int id, [FromBody] GenreCreationDTO genreCreationDTO)
        {
            var genre = _mapper.Map<Genre>(genreCreationDTO);
            genre.Id = id;
            _context.Entry(genre).State = EntityState.Modified;
            await _context.SaveChangesAsync();
            return NoContent();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var genre = await _context.Genres.FirstOrDefaultAsync(x => x.Id == id);

            if (genre == null) return NotFound();

            _context.Remove(genre);

            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
