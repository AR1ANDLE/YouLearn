import test from 'node:test';
import assert from 'node:assert/strict';
import {CURRICULUM,CONCEPTS,QUIZ_BANK} from '../curriculum.js';

test('the roadmap contains the seven requested official phase titles in order',()=>{
  assert.equal(CURRICULUM.length,7);
  assert.match(CURRICULUM[0].title,/SAS/);
  assert.match(CURRICULUM[1].title,/maquetter/);
  assert.match(CURRICULUM[2].title,/interface utilisateur dynamique/);
  assert.match(CURRICULUM[3].title,/base de données/);
  assert.match(CURRICULUM[4].title,/back-end/);
  assert.match(CURRICULUM[5].title,/gestion de contenu ou e-commerce/);
  assert.match(CURRICULUM[6].title,/composants/);
});

test('every phase is nested, has learning metadata, and includes measurable concepts',()=>{
  for(const phase of CURRICULUM){
    assert.ok(phase.modules.length>=2,phase.title);
    assert.ok(phase.objectives.length&&phase.prerequisites.length&&phase.activities.length,phase.title);
    assert.ok(phase.project&&phase.criteria&&phase.duration,phase.title);
    for(const module of phase.modules){
      assert.ok(module.concepts.length,module.name);
      for(const concept of module.concepts){
        assert.ok(concept.competencies.length>=4,concept.title);
        assert.equal(concept.checklistLabels.length,5,concept.title);
        assert.ok(concept.explanation&&concept.exercise,concept.title);
        assert.ok(Array.isArray(concept.resources),concept.title);
      }
    }
  }
});

test('event delegation has the explicit practical competency list from the brief',()=>{
  const concept=CONCEPTS.find(c=>c.title==='Event delegation');
  assert.ok(concept);
  assert.ok(concept.competencies.some(x=>x.includes('event bubbling')));
  assert.ok(concept.competencies.some(x=>x.includes('event.target')));
  assert.ok(concept.competencies.some(x=>x.includes('closest')));
});

test('React, TypeScript, and Laravel content is marked supplementary',()=>{
  const extended=CURRICULUM.flatMap(p=>p.modules).filter(m=>/Supplementary/.test(m.name));
  assert.ok(extended.length>=2);
  assert.ok(extended.every(m=>m.supplementary===true));
});

test('starter quiz bank spans different answer styles and provides feedback',()=>{
  const types=new Set(QUIZ_BANK.map(q=>q.type));
  for(const type of ['multiple-choice','true-false','fill-blank','code-output','identify-error','match','short-answer'])assert.ok(types.has(type),type);
  for(const q of QUIZ_BANK)assert.ok(q.explanation&&q.related,q.id);
});

test('recommended resources use the expected publisher domains and HTTPS',()=>{
  for(const concept of CONCEPTS)for(const resource of concept.resources){
    const u=new URL(resource.url);
    assert.equal(u.protocol,'https:');
    assert.ok(resource.title&&resource.source&&resource.type&&resource.language);
  }
});
